import { gql } from '@apollo/client'

// TODO: return to list
// engagedUsers {
//   username
// }
export const QUERY_POST = gql`
  query GetPost($id: ID, $slug: String) {
    post(id: $id, slug: $slug) {
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
