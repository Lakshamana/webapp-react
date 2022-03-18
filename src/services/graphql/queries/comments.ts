import { gql } from '@apollo/client'

export const QUERY_COMMENTS = gql`
  query Comments(
    $postId: String!
    $limit: Int
    $skip: Int
    $since: DateTime
    $orderBy: [CommentTypeSortDirective]
  ) {
    comments(
      filter: { postId: $postId, since: $since }
      limit: $limit
      skip: $skip
      orderBy: $orderBy
    ) {
      author {
        avatarUrl
        username
      }
      countComments
      createdAt
      id
      countUpvotes
      description
      myUpvote
    }
  }
`
