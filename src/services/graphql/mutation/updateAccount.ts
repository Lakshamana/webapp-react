import { gql } from '@apollo/client'

export const MUTATION_UPDATE_ACCOUNT = gql`
  mutation UpdateMyAccount($payload: UpdateAccountInput!) {
    updateMyAccount(payload: $payload) {
      display_name
      email
      first_name
      last_name
      username
    }
  }
`
