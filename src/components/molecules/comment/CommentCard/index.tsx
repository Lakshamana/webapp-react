import { useState, useEffect } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { useLazyQuery, useMutation } from '@apollo/client'
import { useThemeStore } from 'services/stores'
import { Text, CommentInput, CommentLoading } from 'components'
import { colors } from 'styles'
import { defaultProps, IProps } from './types'
import { CardHeader, Options, ToggleReplies } from './components'
import { QUERY_COMMENTS, MUTATION_ADD_COMMENT } from 'services/graphql'
import { Comment as CommentType } from 'generated/graphql'
import { DEFAULT_PAGESIZE_COMMENTS } from 'config/constants'
import { pxToRem } from 'styles/metrics'

const CommentCard = ({ ...props }: IProps) => {
  const { colorMode } = useThemeStore()
  const [showReplyInput, setShowReplyInput] = useState(false)
  const [showReplies, setShowReplies] = useState(false)

  const [getReplies, { data: allReplies, loading: allRepliesLoading }] = useLazyQuery(QUERY_COMMENTS, {
    fetchPolicy: 'network-only',
  })
  const [addReply, { data: newReply, loading: addReplyLoading }] = useMutation(MUTATION_ADD_COMMENT)

  useEffect(() => {
    if (newReply) getAllReplies()
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

  return (
    <Grid templateColumns='42px 7fr' gap={2} alignItems={'center'} my={4}>
      <CardHeader
        author={props.author}
        createdAt={props.createdAt}
      />
      <GridItem />
      <GridItem w={'100%'}>
        <Text
          color={colors.generalText[colorMode]}
          fontSize={pxToRem(16)}
        >
          {props.description}
        </Text>
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
            addComment={addReply}
            addCommentLoading={addReplyLoading}
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
