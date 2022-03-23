import { gql } from '@apollo/client'

export const MUTATION_FORGET_ACCOUNT = gql`
  mutation ForgetAcount($id: ID!, $input: ForgetAccountInput!) {
    forgetAccount(id: $id, input: $input) {
      email
    }
  }
`
