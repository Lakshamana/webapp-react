import { gql } from '@apollo/client'

export const MUTATION_FORGET_ACCOUNT = gql`
  mutation ForgetAcount($account: ID!) {
    forgetAccount(id: $account) {
      account {
        email
      }
    }
  }
`
