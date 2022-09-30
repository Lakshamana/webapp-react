import { gql } from '@apollo/client'

export const QUERY_CHANNEL = gql`
  query Channel($slug: String) {
    channel(slug: $slug) {
      ... on AvailableChannel {
        access
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
export const QUERY_VERIFY_CHANNEL_KIND = gql`
  query GetChannelKind($slug: String) {
    channel(slug: $slug) {
      ... on AvailableChannel {
        access
        id
        kind
        name
        __typename
      }
      ... on GeolockedChannel {
        id
        name
        access
        kind
        __typename
      }
    }
  }
`

export const QUERY_CHANNEL_ENTITLEMENTS = gql`
  query GetChannelEntitlements($id: ID, $slug: String) {
    channel(id: $id, slug: $slug) {
      ... on AvailableChannel {
        slug
        entitlements
      }
    }
  }
`
