import { gql } from '@apollo/client'

export const QUERY_COMMENTS = gql`
  query Comments(
    $filter: CommentFilter
    $limit: Float
    $sort: [FindPostCommentsSort!]
    $skip: Float
  ) {
    comments(filter: $filter, limit: $limit, skip: $skip, sort: $sort) {
      id
      author {
        displayName
        username
      }
      countComments
      description
      countUpVotes
      parent
    }
  }
`
