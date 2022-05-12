import { gql } from '@apollo/client'

export const QUERY_TAG = gql`
  query GetTag($id: ID, $slug: String) {
    tag(id: $id, slug: $slug) {
      id
      title
      description
      relatedCategories {
        access
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
        slug
        status
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
