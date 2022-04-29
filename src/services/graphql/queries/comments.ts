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
          displayName
          username
        }
        description
        id
        countUpVotes
        createdAt
        countComments
        parent
      }
      isLastPage
      page
      pageCount
      pageSize
    }
  }
`
