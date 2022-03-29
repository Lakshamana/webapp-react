import { gql } from '@apollo/client'

export const QUERY_CHANNELS = gql`
  query Channels($filter: ChannelFindAllFilter!) {
    channels(filter: $filter) {
      ... on AvailableChannel {
        id
        kind
        description
        geofence
        name
        customization {
          icon {
            dark
            light
          }
          logo {
            dark
            light
          }
          thumbnail
        }
        __typename
      }
      ... on GeolockedChannel {
        id
        name
        thumbnail
        customization {
          icon {
            dark
            light
          }
          logo {
            dark
            light
          }
          thumbnail
        }
        kind
        __typename
      }
    }
  }
`
