import { gql } from '@apollo/client'

export const QUERY_PROFILE = gql`
  query Profile($account: ID!) {
    profile(account: $account) {
      avatar
      id
      phone
      locale
    }
    account(id: $account) {
      username
      display_name
      email
    }
  }
`
