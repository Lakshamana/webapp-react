import { gql } from '@apollo/client'

export const MUTATION_CATEGORY_PASSWORD_CHECK = gql`
  mutation CategoryPasswordCheck($id: String!, $payload: CategoryPasswordCheckInput!) {
    categoryPasswordCheck(id: $id, payload: $payload) {
      correct
    }
  }
`
