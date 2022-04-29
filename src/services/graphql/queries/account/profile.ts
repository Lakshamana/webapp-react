import { gql } from '@apollo/client'

export const QUERY_PROFILE = gql`
  query Profile($account: ID!) {
    profile(account: $account) {
      id
      address
      avatar_url
      birthday
      phone
    }
  }
`
