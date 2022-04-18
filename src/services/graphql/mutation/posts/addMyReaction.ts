import { gql } from '@apollo/client'

export const MUTATION_ADD_MY_REACTION = gql`
  mutation addReaction($input: AddReaction!) {
    addReaction(input: $input) {
      name
      count
    }
  }
`

