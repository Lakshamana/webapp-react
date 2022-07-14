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
          categories {
            id
            name
          }
          slug
          title
          tags {
            id
            title
          }
          type
          media {
            ... on MediaAudio {
              mp3Path
              baseUrl
              filename
              status
              type
            }
            ... on MediaPhoto {
              baseUrl
              filename
              imgPath
            }
            ... on MediaVideo {
              baseUrl
              filename
              mp4Path
              thumbnailPath
            }
          }
        }
      }
      total
    }
  }
`
