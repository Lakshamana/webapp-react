import { gql } from '@apollo/client'

export const QUERY_CHANNELS = gql`
  query Channels($filter: ChannelFindAllFilter!) {
    channels(filter: $filter) {
      ... on AvailableChannel {
        id
        access
        kind
        description
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
      }
    }
  }
`
