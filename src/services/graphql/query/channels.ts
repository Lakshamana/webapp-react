import { gql } from '@apollo/client'

export const QUERY_CHANNELS = gql`
  query Channels($filter: FilterFindAllChannelsInput!) {
    channels(filterFindAllChannelsInput: $filter) {
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
    }
  }
`
