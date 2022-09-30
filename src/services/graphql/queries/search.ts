import { gql } from '@apollo/client'

export const QUERY_SEARCH = gql`
  query Search($filters: SearchFilter) {
    search(filters: $filters) {
      hasNextPage
      hasPreviousPage
      isFirstPage
      isLastPage
      page
      pageCount
      pageNumberIsGood
      pageSize
      rows {
        ... on SearchCategory {
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
          id
          name
          slug
          tags {
            id
            title
          }
        }
        ... on SearchLiveEvent {
          category {
            id
            name
          }
          thumbnail {
            imgPath
          }
          id
          slug
          title
          tags {
            id
            title
          }
        }
        ... on SearchPost {
          id
          slug
          description
          title
          type
          thumbnail {
            imgPath
            baseUrl
          }
          media {
            ... on MediaAudio {
              mp3Path
              filename
            }
            ... on MediaPhoto {
              imgPath
            }
            ... on MediaVideo {
              thumbnailPath
              baseUrl
            }
          }
        }
      }
      total
    }
  }
`
