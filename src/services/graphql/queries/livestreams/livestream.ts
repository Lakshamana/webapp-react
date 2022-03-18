import { gql } from '@apollo/client'

export const QUERY_LIVESTREAM = gql`
  query GetLivestream($id: String!) {
    livestream(id: $id) {
      ... on LivestreamEvent {
        id
        access
        title
        description
        status
        scheduledStartAt
        hlsPlaybackUrl
        isCommentsEnabled
        isReactionsEnabled
        isPresenceEnabled
        thumbnail {
          imgPath
        }
        status
      }
    }
  }
`
