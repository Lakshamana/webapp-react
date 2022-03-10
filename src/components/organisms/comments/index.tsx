import { useState } from 'react'
import { Flex, Divider } from '@chakra-ui/react'
import { useQuery } from '@apollo/client'
import { useThemeStore } from 'services/stores'
import { Comment, Text } from 'components'
import { CommentForm } from './components'
import { QUERY_COMMENTS } from 'services/graphql'
import { kFormatter } from 'utils'
import { colors } from 'styles'
import { AvailableVideoPost } from 'types/posts'
import { DEFAULT_LIMIT_QUERY } from 'config/constants'
import {
  CommentTypeSortEnum,
  SortDirection,
  Comment as CommentType,
} from 'generated/graphql'
import { useEffect } from 'react'

const Comments = ({ ...props }: AvailableVideoPost) => {
  const { colorMode } = useThemeStore()
  const [comments, setComments] = useState<CommentType[]>()

  const { data } = useQuery(QUERY_COMMENTS, {
    variables: {
      postId: props.id,
      limit: DEFAULT_LIMIT_QUERY,
      orderBy: [
        {
          name: CommentTypeSortEnum.CreatedAt,
          direction: SortDirection.Desc,
        },
      ],
    },
  })

  useEffect(() => {
    if (data) setComments(data.comments)
  }, [data])

  return (
    <Flex flexDirection="column" width={'100%'}>
      <Text
        fontWeight="bolder"
        fontSize="1.4rem"
        color={colors.generalText[colorMode]}
      >
        {`${kFormatter(props?.counts?.countComments || 0)} Comments`}
      </Text>
      <CommentForm></CommentForm>
      {comments?.length &&
        comments.map((comment: CommentType) => {
          return <Comment {...comment}></Comment>
        })}
    </Flex>
  )
}

export { Comments }
