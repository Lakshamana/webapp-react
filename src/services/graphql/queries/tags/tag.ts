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
        thumbnail {
          imgPath
        }
      }
      slug
    }
  }
`

export const QUERY_LOOP_TAGS = (ids) => gql`
query Tags{
  ${ids?.map(
    (id, index) =>
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
        slug
      }`
  )}
}
`
