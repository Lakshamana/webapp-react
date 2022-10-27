import { gql } from '@apollo/client'

export const QUERY_LIVE_EVENT = gql`
  query LiveEvent($slug: String) {
    liveEvent(slug: $slug) {
      id
      access
      createdAt
      description
      kind
      scheduledStartAt
      commentsEnabled
      hlsPlaybackUrl
      presenceEnabled
      reactionsEnabled
      slug
      status
      streamName
      title
      type
    }
  }
`
export const QUERY_VERIFY_LIVE_EVENT_KIND = gql`
  query LiveEventKind($slug: String) {
    liveEventKind(slug: $slug) {
      id
      kind
      geoFence
      slug
      title
    }
  }
`

export const QUERY_LIVE_EVENT_ENTITLEMENTS = gql`
  query LiveEventEntitlements($slug: String) {
    liveEvent(slug: $slug) {
      id
      access
      entitlements
    }
  }
`
