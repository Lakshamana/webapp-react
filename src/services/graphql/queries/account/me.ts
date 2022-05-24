import { gql } from '@apollo/client'

export const QUERY_ME = gql`
  query Me {
    me {
      account {
        id
        display_name
        email
        first_name
        last_name
        username
      }
      profile {
        id
        address
        # avatar_url
        birthday
        custom_fields
        locale
        phone
      }
    }
  }
`
