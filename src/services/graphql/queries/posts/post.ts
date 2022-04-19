import { gql } from '@apollo/client'

// TODO: return to list
// engagedUsers {
//   username
// }
export const QUERY_POST = gql`
  query GetPost($slug: String) {
    post(slug: $slug) {
      id
      access
      allowComments
      countComments
      countReactions
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
      media {
        ... on MediaVideo {
          id
          baseUrl
          mp4Path
          duration
          aspectRatio
          createdAt
          hlsPath
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
    }
  }
`
