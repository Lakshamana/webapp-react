import { gql } from '@apollo/client'

export const QUERY_MENUS = gql`
  query Menus($filter: MenuFilter) {
    menus(filter: $filter) {
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

export const QUERY_PUBLIC_MENUS = gql`
  query PublicMenus($filter: MenuFilter) {
    publicMenus(filter: $filter) {
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
