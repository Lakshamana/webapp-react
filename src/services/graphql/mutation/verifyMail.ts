import { gql } from '@apollo/client'

export const MUTATION_VERIFY_MAIL = gql`
  mutation VerifyMail($verifyMailInput: VerifyEmailDTO!) {
    verifyMail(verifyMailInput: $verifyMailInput) {
      exist
    }
  }
`
