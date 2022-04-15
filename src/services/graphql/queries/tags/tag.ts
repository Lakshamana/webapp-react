import { gql } from '@apollo/client'

export const QUERY_TAG = gql`
  query GetTag($id: ID!) {
    tag(id: $id) {
      id
      title
      description
      relatedCategories {
        access
        createdAt
        slug
        pinnedStatus {
          pinned
        }
        id
        description
        name
        kind
        customization {
          thumbnail {
            imgPath
          }
        }
      }
      relatedPosts {
        access
        publishedAt
        slug
        pinnedStatus {
          pinned
        }
        id
        description
        title
        kind
        thumbnail {
          imgPath
        }
      }
      slug
    }
  }
`
