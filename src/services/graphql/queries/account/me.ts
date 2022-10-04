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
        is_admin
        is_super_user
        is_tenant_user
      }
      profile {
        id
        address
        avatar {
          imgPath
        }
        birthday
        custom_fields
        locale
        phone
      }
    }
  }
`
