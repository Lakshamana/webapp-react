import { gql } from '@apollo/client'

export const QUERY_ACCOUNT = gql`
  query Account($id: ID!) {
    account(id: $id) {
      display_name
      email
      first_name
      last_name
      username
    }
  }
`
