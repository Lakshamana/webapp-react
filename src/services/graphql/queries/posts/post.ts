import { gql } from '@apollo/client'

export const QUERY_POST = gql`
  query GetPost($slug: String) {
    post(slug: $slug) {
      id
      access
      allowComments
      countComments
      countReactions
      slug
      description
      categories {
        id
      }
      pinnedStatus {
        pinned
      }
      featured
      geofence
      kind
      playlists {
        id
        slug
        title
      }
      engagedUsers {
        username
      }
      media {
        ... on MediaVideo {
          id
          baseUrl
          mp4Path
          duration
          aspectRatio
          createdAt
          hlsPath
          subtitles {
            id
            locale
            baseUrl
            vttPath
            label
          }
        }
        ... on MediaAudio {
          id
          duration
          mp3Path
        }
        ... on MediaPhoto {
          id
          imgPath
        }
      }
      myReactions {
        name
      }
      reactions {
        name
        count
      }
      title
      type
    }
  }
`

export const QUERY_VERIFY_POST_KIND = gql`
  query GetPostKind($slug: String) {
    post(slug: $slug) {
      id
      title
      access
      kind
      entitlements
    }
  }
`
