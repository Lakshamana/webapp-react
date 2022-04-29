import { gql } from '@apollo/client'

export const MUTATION_DELETE_COMMENT = gql`
  mutation deleteComment($id: String!) {
    deleteComment(id: $id) {
      id
      description
    }
  }
`

