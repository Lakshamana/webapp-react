import { gql } from '@apollo/client'

export const QUERY_CHANNELS = gql`
  query Channels($filter: ChannelFindAllFilter!) {
    channels(filter: $filter) {
      ... on AvailableChannel {
        id
        access
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
        kind
        __typename
      }
    }
  }
`

export const QUERY_PUBLIC_CHANNELS = gql`
  query PublicChannels($filter: ChannelFindAllFilter!) {
    publicChannels(filter: $filter) {
      ... on AvailableChannel {
        id
        kind
        access
        description
        geofence
        slug
        name
        __typename
      }
      ... on GeolockedChannel {
        id
        name
        kind
        __typename
      }
    }
  }
`

