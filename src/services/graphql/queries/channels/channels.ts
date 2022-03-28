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
            dark {
              imgPath
            }
            light {
              imgPath
            }
          }
          logo {
            dark {
              imgPath
            }
            light {
              imgPath
            }
          }
          thumbnail {
            imgPath
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
            imgPath
          }
        }
        __typename
      }
    }
  }
`
