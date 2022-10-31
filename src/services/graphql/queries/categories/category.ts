import { gql } from '@apollo/client'

export const QUERY_CATEGORY = gql`
  query Category($slug: String, $postFilter: PostFilter) {
    category(slug: $slug) {
      id
      access
      slug
      createdAt
      pinnedStatus {
        pinned
      }
      customization {
        desktop {
          imgPath
        }
        mobile {
          imgPath
        }
        thumbnail {
          imgPath
        }
      }
      posts(filters: $postFilter) {
        hasNextPage
        hasPreviousPage
        isFirstPage
        isLastPage
        page
        pageCount
        total
        rows {
          id
          access
          title
          description
          geofence
          kind
          slug
          status
          pinnedStatus {
            pinned
          }
          thumbnail {
            imgPath
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
              mp3Path
            }
            ... on MediaPhoto {
              id
              imgPath
            }
          }
          type
        }
      }
      children(filter: { sortBy: "sort.asc" }) {
        sort
        description
        featuredAt
        geoFence
        pinnedStatus {
          pinned
        }
        name
        slug
        id
        description
        customization {
          thumbnail {
            imgPath
          }
        }
      }
      description
      featuredAt
      geoFence
      id
      name
    }
  }
`

export const QUERY_VERIFY_CATEGORY_KIND = gql`
  query CategoryKind($slug: String) {
    categoryKind(slug: $slug) {
      id
      kind
      geoFence
      name
    }
  }
`

export const QUERY_CATEGORY_ENTITLEMENTS = gql`
  query CategoryEntitlements($slug: String) {
    category(slug: $slug) {
      id
      access
      slug
      entitlements
    }
  }
`
