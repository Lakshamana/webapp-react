import { gql } from '@apollo/client'

export const QUERY_CHANNELS = gql`
  query Channels($filter: FilterFindAllChannelsInput!) {
    channels(filter: $filter) {
      ... on AvailableChannel {
        banner
        customization
        description
        entitlements
        geofence
        id
        logo
        name
        organization
        status
        thumbnail
        __typename
      }
      ... on GeolockedChannel {
        id
        name
        customization
        thumbnail
        __typename
      }
    }
  }
`
