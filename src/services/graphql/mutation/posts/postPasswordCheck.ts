import { gql } from '@apollo/client'

export const MUTATION_POST_PASSWORD_CHECK = gql`
  mutation PostPasswordCheck($id: String!, $payload: PostPasswordCheckInput!) {
    postPasswordCheck(id: $id, payload: $payload) {
      correct
    }
  }
`
