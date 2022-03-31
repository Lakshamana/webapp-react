import { gql } from '@apollo/client'

export const QUERY_POSTS = gql`
  query GetPosts($filters: PostFilter) {
    posts(filters: $filters) {
      id
      access
      title
      description
      featured
      geofence
      kind
      slug
      status
      tags
      thumbnail {
        imgPath
      }
      type
      publishedAt
      media {
        ... on MediaVideo {
          duration
        }
      }
    }
  }
`
