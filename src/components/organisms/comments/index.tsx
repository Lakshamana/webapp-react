import { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { useQuery } from '@apollo/client'
import { useThemeStore } from 'services/stores'
import { Comment, Text } from 'components'
import { CommentForm } from './components'
import { QUERY_COMMENTS } from 'services/graphql'
import { kFormatter } from 'utils'
import { colors } from 'styles'
import { Post } from 'generated/graphql'
import { DEFAULT_LIMIT_QUERY } from 'config/constants'
import {
  FindPostCommentSortFields,
  SortDirection,
  Comment as CommentType,
} from 'generated/graphql'

const Comments = ({ ...props }: Post) => {
  const { colorMode } = useThemeStore()
  const [comments, setComments] = useState<CommentType[]>()

  const { data, loading } = useQuery(QUERY_COMMENTS, {
    variables: {
      filter: {
        post: props.id,
      },
      limit: DEFAULT_LIMIT_QUERY,
      sort: [
        {
          field: FindPostCommentSortFields.CreatedAt,
          direction: SortDirection.Desc,
        },
      ],
    },
    onCompleted: (result) => {
      setComments(result.comments)
    },
  })

  return (
    <Flex flexDirection="column" width={'100%'}>
      <Text
        fontWeight="bolder"
        fontSize="1.4rem"
        color={colors.generalText[colorMode]}
      >
        {`${kFormatter(props?.countComments || 0)} Comments`}
      </Text>
      <CommentForm/>
      {comments?.length &&
        comments.map((comment: CommentType) => {
          return <Comment {...comment}></Comment>
        })}
    </Flex>
  )
}

export { Comments }
