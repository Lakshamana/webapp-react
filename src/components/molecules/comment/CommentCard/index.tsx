import { useState, useEffect } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { useLazyQuery, useMutation } from '@apollo/client'
import { CommentInput, CommentLoading } from 'components'
import { defaultProps, IEditInput, IProps } from './types'
import { CardHeader, CardText, Options, ToggleReplies } from './components'
import { QUERY_COMMENTS, MUTATION_ADD_COMMENT } from 'services/graphql'
import { DEFAULT_PAGESIZE_COMMENTS } from 'config/constants'
import { useCommentsStore } from 'services/stores'

const CommentCard = ({ ...props }: IProps) => {
  const {
    commentsStore,
    repliesStore,
    setUpdateRepliesStore,
    setUpdateCommentsStore
  } = useCommentsStore()
  const [showReplyInput, setShowReplyInput] = useState<boolean>(false)
  const [showReplies, setShowReplies] = useState<boolean>(false)
  const [editInput, setEditInput] = useState<Maybe<IEditInput>>(null)

  const [getReplies, { data, loading: allRepliesLoading }] = useLazyQuery(QUERY_COMMENTS, {
    fetchPolicy: 'network-only'
  })
  const [addReply, { data: newReply, loading: replyCommentLoading }] = useMutation(MUTATION_ADD_COMMENT)

  useEffect(() => {
    if (!data) return
    setUpdateRepliesStore({
      id: props.id,
      totalComments: data.comments?.total,
      allComments: [...data.comments?.rows]
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const updateCountCommentsStore = () => {
    const { totalComments, allComments } = commentsStore
    const updateComments = allComments.map(each => {
      if (each.id === props.id) {
        return { ...each, countComments: each.countComments + 1 }
      }
      return each
    })
    setUpdateCommentsStore({
      totalComments,
      allComments: [...updateComments]
    })
  }

  useEffect(() => {
    if (!newReply || !props.id) return
    if (props.countComments > 0 && showReplies === true) {
      const getRepliesComments = repliesStore[props.id]
      const { allComments, totalComments } = getRepliesComments
      const updateTotalComments = totalComments + 1
      setUpdateRepliesStore({
        id: props.id,
        totalComments: updateTotalComments,
        allComments: [
          { ...newReply.addComment },
          ...allComments
        ]
      })
    }
    updateCountCommentsStore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newReply])

  const getAllReplies = (page: number = 1) => {
    getReplies({
      variables: {
        filter: {
          post: props.postId,
          parent: props.id,
          page,
          pageSize: DEFAULT_PAGESIZE_COMMENTS,
          sortBy: 'createdAt.desc'
        }
      }
    })
  }

  const handleGetRepliesComments = () => {
    if (showReplies) {
      setShowReplies(false)
      return
    }
    setShowReplies(true)
    getAllReplies()
  }

  const handleEditComment = (selected) => {
    if (selected.option === 'EDIT') {
      setEditInput(selected)
      return
    }
    props.selectPopupOption(selected, props.typeOfCard, props.parent)
  }

  return (
    <Grid templateColumns='42px 7fr' gap={2} alignItems={'center'} my={4}>
      <CardHeader
        id={props.id}
        authorId={props.account}
        author={props.author || undefined}
        createdAt={props.createdAt}
        action={handleEditComment}
      />
      <GridItem />
      <GridItem w={'100%'}>
        <CardText
          editInput={editInput}
          setEditInput={setEditInput}
          description={props.description}
          action={props.editComment}
          loading={props.editedCommentLoading}
        />
        <Options
          showReply={showReplyInput}
          setShowReply={setShowReplyInput}
          typeOfOptions={props.typeOfCard}
          {...props}
        />
        {
          props.typeOfCard === 'CARD' &&
          showReplyInput &&
          <CommentInput
            postId={props.postId || ''}
            parentId={props.id}
            action={addReply}
            actionLoading={replyCommentLoading}
          />
        }
      </GridItem>
      <GridItem />
      {
        props.typeOfCard === 'CARD' &&
        !!props?.countComments &&
        <GridItem w={'100%'}>
          <ToggleReplies
            count={props.countComments}
            state={showReplies}
            action={handleGetRepliesComments}
          />
        </GridItem>
      }
      <GridItem />
      <GridItem w={'100%'}>
        {
          props.typeOfCard === 'CARD' &&
          allRepliesLoading &&
          <CommentLoading show={3} />
        }
        {
          props.typeOfCard === 'CARD' &&
          showReplies &&
          repliesStore[props.id] &&
          repliesStore[props.id].allComments?.map((reply) =>
            <CommentCard
              key={`reply-${reply.id}`}
              typeOfCard='REPLY'
              postId={reply.id}
              addComment={props.addComment}
              editComment={props.editComment}
              selectPopupOption={props.selectPopupOption}
              newCommentLoading={props.newCommentLoading}
              editedCommentLoading={props.editedCommentLoading}
              {...reply}
            />
          )
        }
      </GridItem>
    </Grid>
  )
}

CommentCard.defaultProps = defaultProps

export { CommentCard }
