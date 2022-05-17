import { useState } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { useLazyQuery, useMutation } from '@apollo/client'
import { CommentInput, CommentLoading } from 'components'
import { defaultProps, IEditInput, IProps } from './types'
import { CardHeader, CardText, Options, ToggleReplies } from './components'
import { QUERY_COMMENTS, MUTATION_ADD_COMMENT } from 'services/graphql'
import { DEFAULT_PAGESIZE_COMMENTS } from 'config/constants'

const CommentCard = ({ ...props }: IProps) => {
  const [showReplyInput, setShowReplyInput] = useState<boolean>(false)
  const [showReplies, setShowReplies] = useState<boolean>(false)
  const [editInput, setEditInput] = useState<Maybe<IEditInput>>(null)

  const [getReplies, { data: allReplies, loading: allRepliesLoading }] = useLazyQuery(QUERY_COMMENTS, {
    fetchPolicy: 'network-only',
  })
  const [addReply, { data: newReply, loading: addReplyLoading }] = useMutation(MUTATION_ADD_COMMENT)

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
    props.selectPopupOption(selected)
  }

  return (
    <Grid templateColumns='42px 7fr' gap={2} alignItems={'center'} my={4}>
      <CardHeader
        id={props.id}
        authorId={props.account}
        author={props.author}
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
            actionLoading={addReplyLoading}
          />
        }
      </GridItem>
      <GridItem />
      {
        props.typeOfCard === 'CARD' &&
        props?.countComments &&
        <GridItem w={'100%'}>
          <ToggleReplies
            count={props.countComments}
            state={showReplies}
            action={handleGetRepliesComments}
          />
        </GridItem>
      }
      <GridItem />
      {/* <GridItem w={'100%'}>
        {
          props.typeOfCard === 'CARD' &&
          allRepliesLoading &&
          <CommentLoading show={3} />
        }
        {
          props.typeOfCard === 'CARD' &&
          showReplies &&
          allReplies?.comments?.rows?.map((reply: CommentType) =>
            <CommentCard
              key={`reply-${reply.id}`}
              typeOfCard='REPLY'
              {...reply}
            />
          )}
      </GridItem> */}
    </Grid>
  )
}

CommentCard.defaultProps = defaultProps

export { CommentCard }
