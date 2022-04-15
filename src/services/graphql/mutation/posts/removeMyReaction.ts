import { gql } from '@apollo/client'

export const MUTATION_REMOVE_MY_REACTION = gql`
  mutation RemoveReaction($input: RemoveReaction!) {
    removeReaction(input: $input) {
      name
      count
    }
  }
`

