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
        }
      }
      ... on GeolockedChannel {
        id
        name
        slug
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
        }
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
      }
      slug
    }
  }
`
export const QUERY_VERIFY_CHANNEL_KIND = gql`
  query ChannelKind($slug: String) {
    channelKind(slug: $slug) {
      id
      kind
      slug
      geofence
      name

    }
  }
`

export const QUERY_CHANNEL_ENTITLEMENTS = gql`
  query ChannelEntitlements($id: ID, $slug: String) {
    channel(id: $id, slug: $slug) {
      ... on AvailableChannel {
        id
        access
        entitlements
      }
    }
  }
`
