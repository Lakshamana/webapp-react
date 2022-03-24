import { gql } from '@apollo/client'

export const QUERY_CHANNELS = gql`
  query Channels($filter: FilterFindAllChannelsInput!) {
    channels(filter: $filter) {
      ... on AvailableChannel {
        id
        kind
        description
        geofence
        name
        thumbnail
        customization {
          banner {
            img_path
          }
          logo {
            img_path
          }
          thumbnail {
            img_path
          }
        }
        __typename
      }
      ... on GeolockedChannel {
        id
        name
        thumbnail
        kind
        customization {
          thumbnail {
            img_path
          }
        }
        __typename
      }
    }
  }
`
