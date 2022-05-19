import { gql } from '@apollo/client'

export const MUTATION_ADD_COMMENT = gql`
  mutation addComment($payload: AddComment!) {
    addComment(payload: $payload) {
      countComments
      author {
        displayName
        username
      }
      parent
      id
      description
      createdAt
      commentVoteStats {
        countUpvotes
        countDownvotes
      }
      content
      account
      myVote
    }
  }
`
