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
//TODO: Precisa colocar entitlments qui
export const QUERY_VERIFY_LIVE_EVENT_KIND = gql`
  query LiveEventKind($slug: String) {
    liveEventKind(slug: $slug) {
      id
      access
      kind
      entitlements
      slug
      title
    }
  }
`

