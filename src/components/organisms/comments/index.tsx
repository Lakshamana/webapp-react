import { useState, useEffect } from 'react'
import { Flex, Center } from '@chakra-ui/react'
import { useQuery, useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'
import { Comment, Text, Skeleton, Select } from 'components'
import { CommentForm } from './components'
import { QUERY_COMMENTS, ADD_COMMENT } from 'services/graphql'
import { kFormatterTranslate } from 'utils'
import { colors } from 'styles'
import { Post } from 'generated/graphql'
import { DEFAULT_LIMIT_QUERY } from 'config/constants'
import {
  SortDirection,
  Comment as CommentType
} from 'generated/graphql'

const Comments = ({ ...props }: Post) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const [comments, setComments] = useState<CommentType[]>()
  const [totalComments, setTotalComments] = useState<number>(0)
  const [filterBy, SetFilterBy] = useState()

  const translateMapper = [
    'page.feed.no_comments',
    'page.feed.comment',
    'page.feed.comments'
  ]

  const filterList = [
    { value: 'recent', label: t('page.feed.search_options.recent') },
    { value: 'old', label: t('page.feed.search_options.old') }
  ]

  useQuery(QUERY_COMMENTS, {
    variables: {
      filter: {
        post: props.id,
      },
    },
    onCompleted: ({ comments }) => {
      setTotalComments(comments.total)
      setComments(comments.rows)
    },
  })

  const [addComment, { data: newComment, loading: addCommentLoading }] = useMutation(ADD_COMMENT)

  useEffect(() => {
    if (newComment) {
      setComments(comments?.concat(newComment?.addComment))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newComment])

  const handleFilterChange = (evt: any) => {
    const { value } = evt?.target;
    SetFilterBy(value)
  }

  return (
    <Flex flexDirection="column" width={'100%'}>
      <Flex flexDirection="row" justifyContent={'space-between'}>
        <Text
          fontWeight="bolder"
          fontSize="1.4rem"
          color={colors.generalText[colorMode]}
        >
          {kFormatterTranslate(t, totalComments, translateMapper)}
        </Text>
        <Select
          options={filterList}
          value={filterBy}
          onChange={handleFilterChange}
        />
      </Flex>
      <CommentForm
        postId={props.id}
        addComment={addComment}
        addCommentLoading={addCommentLoading}
        totalComments={totalComments}
        setTotalComments={setTotalComments}
      />
      {
        addCommentLoading &&
        <Center mt={4} width="100%" height={'100%'} flexDirection={'column'}>
          {[0, 1, 2].map(each => (
            <Skeleton key={each} height='30px' width='100%' my={1} />
          ))}
        </Center>
      }
      {
        !addCommentLoading &&
        comments &&
        comments?.map((comment: CommentType) =>
          <Comment key={comment.id} {...comment} />)
      }
    </Flex >
  )
}

export { Comments }
