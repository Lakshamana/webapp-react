import { gql } from '@apollo/client'

export const QUERY_CHANNEL = gql`
  query GetChannel($id: ID!) {
    channel(id: $id) {
      ... on AvailableChannel {
        id
        name
        description
        entitlements
        customization
        geofence
        kind
        banner
        logo
        status
        thumbnail
      }
      ... on GeolockedChannel {
        id
        name
        description
      }
    }
  }
`
