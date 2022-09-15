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

export const QUERY_PUBLIC_CHANNEL = gql`
  query PublicChannel($slug: String) {
    getPublicChannel(slug: $slug) {
      id
      name
      kind
      slug
    }
  }
`
