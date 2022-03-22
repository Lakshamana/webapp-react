import { gql } from '@apollo/client'

export const MUTATION_UPDATE_PASSWORD_ONLY = gql`
  mutation UpdatePasswordOnly($payload: UpdatePasswordOnlyInput!) {
    updatePasswordOnly(payload: $payload) {
      success
    }
  }
`
