import { gql } from '@apollo/client'

export const QUERY_CHANNELS = gql`
  query Channels($filter: ChannelFindAllFilter!) {
    channels(filter: $filter) {
      ... on AvailableChannel {
        id
        kind
        description
        geofence
        slug
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

export const QUERY_CHANNEL = gql`
  query Channel($slug: String) {
    channel(slug: $slug) {
      ... on AvailableChannel {
        id
        kind
        description
        geofence
        slug
        name
        __typename
      }
      ... on GeolockedChannel {
        id
        name
        thumbnail
        slug
        kind
        __typename
      }
    }
  }
`
