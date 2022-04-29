import { gql } from '@apollo/client'

export const MUTATION_VERIFY_MAIL = gql`
  mutation VerifyMail($payload: VerifyEmailDTO!) {
    verifyMail(payload: $payload) {
      exist
    }
  }
`
