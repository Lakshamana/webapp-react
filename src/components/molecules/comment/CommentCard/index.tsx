import { useState } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { useLazyQuery, useMutation } from '@apollo/client'
import { CommentInput, CommentLoading } from 'components'
import { defaultProps, IProps } from './types'
import { CardHeader, CardText, Options, ToggleReplies } from './components'
import { QUERY_COMMENTS, MUTATION_ADD_COMMENT, MUTATION_DELETE_COMMENT } from 'services/graphql'
import { Comment as CommentType } from 'generated/graphql'
import { DEFAULT_PAGESIZE_COMMENTS } from 'config/constants'

const CommentCard = ({ ...props }: IProps) => {
  const [showReplyInput, setShowReplyInput] = useState<boolean>(false)
  const [showReplies, setShowReplies] = useState<boolean>(false)
  const [editInput, setEditInput] = useState(null)

  const [getReplies, { data: allReplies, loading: allRepliesLoading }] = useLazyQuery(QUERY_COMMENTS, {
    fetchPolicy: 'network-only',
  })
  const [addReply, { data: newReply, loading: addReplyLoading }] = useMutation(MUTATION_ADD_COMMENT)
  const [deleteReply, { data: deletedReply, loading: deleteLoading }] = useMutation(MUTATION_DELETE_COMMENT)

  //TODO refact to prevent append
  // useEffect(() => {
  //   if (newReply) getAllReplies()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [newReply])

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

  const handleSelectedPopupOption = (selected) => {
    if (selected.option === 'EDIT') {
      setEditInput(selected)
      return
    }

    if (selected.option === 'DELETE') {
      deleteReply({
        variables: {
          id: selected.id
        }
      })
    }
  }

  return (
    <Grid templateColumns='42px 7fr' gap={2} alignItems={'center'} my={4}>
      <CardHeader
        id={props.id}
        author={props.author}
        createdAt={props.createdAt}
        action={handleSelectedPopupOption}
      />
      <GridItem />
      <GridItem w={'100%'}>
        <CardText
          editInput={editInput}
          setEditInput={setEditInput}
          description={props.description}
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
        <GridItem w={'100%'}>
          {/* //TODO: add conditional for qtd Replies */}
          <ToggleReplies
            count={2}
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
          allReplies?.comments?.rows?.map((reply: CommentType) =>
            <CommentCard
              key={`reply-${reply.id}`}
              typeOfCard='REPLY'
              {...reply}
            />
          )}
      </GridItem>
    </Grid>
  )
}

CommentCard.defaultProps = defaultProps

export { CommentCard }
