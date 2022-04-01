import { gql } from '@apollo/client'

export const QUERY_MENUS = gql`
  query Menus {
    menus {
      rows {
        id
        channel
        icon
        name
        platformExclusive
        route
        sort
        status
        parameters {
          id
          missing
        }
        children {
          id
          channel
          icon
          name
          platformExclusive
          route
          sort
          status
          parameters {
            id
            missing
          }
        }
      }
    }
  }
`
