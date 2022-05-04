import { gql } from '@apollo/client'

export const MUTATION_ADD_VOTE = gql`
  mutation AddVote($input: AddCommentVote!) {
    addVote(input: $input) {
      comment {
        commentVoteStats {
          countDownvotes
          countUpvotes
        }
      }
      commentVote {
        direction
        countUpvotes
        countDownvotes
      }
    }
  }
`
