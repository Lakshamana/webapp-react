import { gql } from '@apollo/client'

export const MUTATION_UPDATE_PASSWORD = gql`
  mutation UpdatePassword($payload: UpdatePassword!) {
    updatePassword(payload: $payload) {
      success
    }
  }
`
