import { gql } from '@apollo/client'

export const QUERY_COMMENTS = gql`
  query Comments($filter: CommentFilter) {
    comments(filter: $filter) {
      hasNextPage
      hasPreviousPage
      isFirstPage
      total
      rows {
        author {
          id
          displayName
          username
        }
        description
        id
        commentVoteStats {
          countDownvotes
          countUpvotes
        }
        createdAt
        countComments
        parent
        account
      }
      isLastPage
      page
      pageCount
      pageSize
    }
  }
`
