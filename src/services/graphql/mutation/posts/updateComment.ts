import { gql } from '@apollo/client'

export const MUTATION_UPDATE_COMMENT = gql`
  mutation UpdateComment($id: String!, $payload: UpdateComment!) {
    updateComment(id: $id, payload: $payload) {
      id
      description
    }
  }
`
