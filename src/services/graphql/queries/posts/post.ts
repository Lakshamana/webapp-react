import { gql } from '@apollo/client'

export const QUERY_POST = gql`
  query GetPost($id: ID, $slug: String) {
    post(id: $id, slug: $slug) {
      id
      access
      allowComments
      countComments
      countReactions
      description
      engagedUsers {
        username
      }
      categories {
        id
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
      reactions {
        name
        count
      }
      title
      type
    }
  }
`
