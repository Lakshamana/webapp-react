import { gql } from '@apollo/client'

export const ADD_MY_REACTION = gql`
  mutation addReaction($input: AddReaction!) {
    addReaction(input: $input) {
      name
      count
    }
  }
`

export const REMOVE_MY_REACTION = gql`
  mutation RemoveReaction($input: RemoveReaction!) {
    removeReaction(input: $input) {
      name
      count
    }
  }
`

