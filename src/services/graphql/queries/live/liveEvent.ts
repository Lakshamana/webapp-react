import { gql } from '@apollo/client'

export const QUERY_LIVE_EVENT = gql`
  query GetLiveEvent($slug: String) {
    liveEvent(slug: $slug) {
      access
      channel
      commentsEnabled
      createdAt
      description
      encodingProfile
      geoFence
      hlsPlaybackUrl
      id
      isDeleted
      kind
      organization
      orientation
      presenceEnabled
      reactionsEnabled
      scheduledStartAt
      slug
      source
      status
      streamName
      thumbnail {
        account
        aspectRatio
        baseUrl
        channel
        createdAt
        filename
        height
        id
        imgPath
        orientation
        status
        type
        upload
        width
      }
      title
      type
      config {
        drm
        dvr
        introVideo
        loop
        primarySource
        redundancy
        secondarySource
        streamInput
        streamProfile
      }
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
