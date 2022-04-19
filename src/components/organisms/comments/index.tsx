import { useState, useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
import { useLazyQuery, useMutation } from '@apollo/client'
import InfiniteScroll from 'react-infinite-scroll-component'
import { QUERY_COMMENTS, MUTATION_ADD_COMMENT } from 'services/graphql'
import { Post, SortDirection, Comment as CommentType } from 'generated/graphql'
import { DEFAULT_PAGESIZE_COMMENTS } from 'config/constants'
import { CommentHeader, CommentInput, CommentCard, CommentLoading } from 'components'

const Comments = ({ ...props }: Post) => {
  const [comments, setComments] = useState<CommentType[]>([])
  const [totalComments, setTotalComments] = useState<number>(0)
  const [filterPage, setFilterPage] = useState(0)
  const [filterBy, SetFilterBy] = useState<SortDirection>(SortDirection.Desc)
  const [hasMore, setHasMore] = useState(true)

  const [getComments, { data: allComments }] = useLazyQuery(QUERY_COMMENTS, {
    fetchPolicy: 'cache-and-network'
  })

  const [addComment, { data: newComment, loading: addCommentLoading }] = useMutation(MUTATION_ADD_COMMENT)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getAllComments(), [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getAllComments(), [filterBy])

  useEffect(() => {
    if (!newComment) return
    if (filterBy === 'ASC') {
      setComments(comments.concat(newComment?.addComment))
      return
    }
    const updateComment = [
      newComment?.addComment,
      ...comments
    ]
    setComments(updateComment)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newComment])

  useEffect(() => {
    if (!allComments) return
    setHasMore(allComments.comments?.hasNextPage)
    setTotalComments(allComments.comments?.total)
    setFilterPage(allComments.comments?.page)
    filterPage === 0
      ? setComments(allComments.comments?.rows)
      : setComments(comments.concat(allComments.comments?.rows))
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

  const getSortByFilter = () => filterBy === 'ASC'
    ? "createdAt.asc"
    : "createdAt.desc"

  const handleFilterChange = (evt: any) => {
    const { value } = evt?.target;
    setComments([])
    setFilterPage(0)
    SetFilterBy(value)
  }

  return (
    <Flex flexDirection="column" width={'100%'}>
      <CommentHeader
        totalComments={totalComments}
        filterBy={filterBy}
        handleFilterChange={handleFilterChange}
      />
      <CommentInput
        postId={props.id}
        addComment={addComment}
        addCommentLoading={addCommentLoading}
        totalComments={totalComments}
        setTotalComments={setTotalComments}
      />
      {
        addCommentLoading &&
        totalComments === 0 &&
        <CommentLoading show={3} />
      }
      <InfiniteScroll
        dataLength={comments?.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<CommentLoading show={3} />}
      >
        {
          comments?.map((comment: CommentType) =>
            <CommentCard
              key={`comment-${comment.id}`}
              postId={props.id}
              addComment={addComment}
              addCommentLoading={addCommentLoading}
              totalComments={totalComments}
              setTotalComments={setTotalComments}
              {...comment}
            />
          )}
      </InfiniteScroll>
    </Flex>
  )
}

export { Comments }
