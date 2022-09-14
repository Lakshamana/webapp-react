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
      relatedPosts(filters: { typeIn: [ON_DEMAND, VIDEO] }) {
        rows {
          access
          type
          slug
          status
          pinnedStatus {
            pinned
          }
          id
          description
          title
          kind
          media {
            ... on MediaVideo {
              id
              duration
              thumbnailPath
              baseUrl
            }
          }
          thumbnail {
            imgPath
          }
        }
      }
      slug
    }
  }
`

export const QUERY_LOOP_TAGS = (ids: String[]) => gql`
query Tags{
  ${ids?.map(
  (id: String) =>
    `tag${id}: tag(id: "${id}") {
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
        rows {
          type
          access
          slug
          status
          pinnedStatus {
            pinned
          }
          media {
            ... on MediaVideo {
              id
              duration
              thumbnailPath
              baseUrl
            }
          }
          id
          description
          title
          kind
          thumbnail {
            imgPath
          }
        }
      }
      slug
    }`
)}
}
`
