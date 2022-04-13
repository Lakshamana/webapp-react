import { useState, useEffect } from 'react'
import { Flex, Center } from '@chakra-ui/react'
import { useLazyQuery, useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Comment, Text, Skeleton, Select } from 'components'
import { CommentForm } from './components'
import { QUERY_COMMENTS, ADD_COMMENT } from 'services/graphql'
import { kFormatterTranslate } from 'utils'
import { colors } from 'styles'
import { Post, SortDirection, Comment as CommentType } from 'generated/graphql'
import { DEFAULT_POLLING_INTERVAL, DEFAULT_PAGESIZE_COMMENTS } from 'config/constants'

const Comments = ({ ...props }: Post) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const [comments, setComments] = useState<CommentType[]>([])
  const [totalComments, setTotalComments] = useState<number>(0)
  const [filterPage, setFilterPage] = useState(0)
  const [filterBy, SetFilterBy] = useState<SortDirection>(SortDirection.Desc)
  const [hasMore, setHasMore] = useState(true)

  const translateMapper = [
    'page.feed.no_comments',
    'page.feed.comment',
    'page.feed.comments'
  ]

  const filterList = [
    { value: 'DESC', label: t('page.feed.search_options.recent') },
    { value: 'ASC', label: t('page.feed.search_options.old') }
  ]

  const [getComments, { data: allComments }] = useLazyQuery(QUERY_COMMENTS, {
    fetchPolicy: 'network-only'
    // pollInterval: DEFAULT_POLLING_INTERVAL,
  })

  const [addComment, { data: newComment, loading: addCommentLoading }] = useMutation(ADD_COMMENT)

  useEffect(() => {
    getAllComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getAllComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy])

  useEffect(() => {
    if (newComment) {
      if (filterBy === 'ASC') {
        setComments(comments.concat(newComment?.addComment))
        return
      }
      const updateComment = [
        newComment?.addComment,
        ...comments
      ]
      setComments(updateComment)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newComment])

  useEffect(() => {
    if (allComments) {
      setHasMore(allComments.comments?.hasNextPage)
      setTotalComments(allComments.comments?.total)
      setFilterPage(allComments.comments?.page)
      filterPage === 0
        ? setComments(allComments.comments?.rows)
        : setComments(comments.concat(allComments.comments?.rows))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allComments])

  const getAllComments = (page: number = 1) => {
    getComments({
      variables: {
        filter: {
          post: props.id,
          page,
          pageSize: DEFAULT_PAGESIZE_COMMENTS,
          sortBy: getSortByFilter()
        }
      }
    })
  }

  const loadMore = () => {
    if (hasMore) getAllComments(filterPage + 1)
  }

  const getSortByFilter = () => filterBy === 'ASC' ? "createdAt.asc" : "createdAt.desc"

  const handleFilterChange = (evt: any) => {
    const { value } = evt?.target;
    setComments([])
    setFilterPage(0)
    SetFilterBy(value)
  }

  const loadingItems = (rows: number) => (
    <Center mt={4} width="100%" height={'100%'} flexDirection={'column'}>
      {Array.from(Array(rows).keys()).map(each => (
        <Skeleton key={each} height='30px' width='100%' my={1} />
      ))}
    </Center>
  )

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
        totalComments === 0 &&
        loadingItems(3)
      }
      <InfiniteScroll
        dataLength={comments?.length}
        next={loadMore}
        hasMore={hasMore}
        loader={loadingItems(3)}
      >
        {
          comments?.map((comment: CommentType) =>
            <Comment
              key={`comment-${comment.id}`}
              {...comment}
            />
          )}
      </InfiniteScroll>
    </Flex >
  )
}

export { Comments }
