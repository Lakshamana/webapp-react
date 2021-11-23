import { gql } from '@apollo/client'

export const QUERY_PROFILE = gql`
  query Profile($account: ID!) {
    profile(account: $account) {
      address
      avatar
      birthday
      gender
      id
      phone
      account
      locale
    }
  }
`
