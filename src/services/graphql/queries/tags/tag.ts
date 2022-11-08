import { gql } from '@apollo/client'
import { HomeCarouselsTypes } from 'types/common'

export const QUERY_TAG = gql`
  query GetTag($id: ID, $slug: String) {
    tag(id: $id, slug: $slug) {
      id
      title
      description
      relatedCategories {
        rows {
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
      }
      relatedPosts {
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
            ... on MediaAudio {
              id
              duration
            }
            ... on MediaPhoto {
              id
              imgPath
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

export const QUERY_PAGINATE_TAG = (type: HomeCarouselsTypes[]) => {
  const hasPost = type.includes(HomeCarouselsTypes.Posts)
  const hasCategory = type.includes(HomeCarouselsTypes.Collections)
  return gql`
    query Tag(
      $tagId: ID!, 
      ${hasPost ? '$postFilters: PostFilter' : ''}
      ${hasCategory ? '$categoryFilters: CategoryFilter' : ''}
    ) {
      tag(id: $tagId) {
        id
        title
        description
        slug
        ${
          hasPost
            ? `
          relatedPosts(filters: $postFilters) {
            total
            hasNextPage
            page
            pageCount
            rows {
              access
              type
              title
              thumbnail {
                imgPath
              }
              status
              slug
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
                ... on MediaAudio {
                  id
                  duration
                }
                ... on MediaPhoto {
                  id
                  imgPath
                }
              }
              id
              description
              kind
            }
          }
        `
            : ''
        }
        ${
          hasCategory
            ? `
          relatedCategories(filters: $categoryFilters) {
            total
            hasNextPage
            page
            pageCount
            rows {
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
          }
        `
            : ''
        }
      }
    }
  `
}
