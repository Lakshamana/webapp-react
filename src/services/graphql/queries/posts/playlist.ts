import { gql } from '@apollo/client'

export const QUERY_PLAYLIST = gql`
  query GetPlaylist($id: ID!) {
    playlist(id: $id) {
      id
      title
      posts {
        id
        access
        title
        description
        kind
        slug
        pinnedStatus {
          pinned
        }
        thumbnail {
          imgPath
        }
        media {
          ... on MediaVideo {
            id
            duration
            thumbnailPath
            baseUrl
          }
          ... on MediaAudio {
            # id
            duration
            mp3Path
          }
        }
        type
      }
      __typename
    }
  }
`
