import { gql } from '@apollo/client'

export const MUTATION_FORGET_ACCOUNT = gql`
  mutation ForgetAccount($forgetAccountId: ID!, $input: ForgetAccountInput!) {
    forgetAccount(id: $forgetAccountId, input: $input) {
      email
    }
  }
`
