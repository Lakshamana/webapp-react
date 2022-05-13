import { gql } from '@apollo/client'

export const QUERY_LIVE_EVENT = gql`
  query GetLiveEvent($slug: String) {
    liveEvent(slug: $slug) {
      access
      createdAt
      description
      id
      kind
      scheduledStartAt
      slug
      status
      streamName
      title
      type
    }
  }
`
export const QUERY_VERIFY_LIVE_EVENT_KIND = gql`
  query GetLiveEventKind($slug: String) {
    liveEvent(slug: $slug) {
      id
      title
      access
      kind
    }
  }
`
