import { gql } from '@apollo/client'

export const QUERY_CATEGORIES = gql`
  query GetCategories($filter: CategoryFilter) {
    categories(filter: $filter) {
      hasNextPage
      hasPreviousPage
      isFirstPage
      isLastPage
      page
      pageNumberIsGood
      pageSize
      rows {
        access
        pinnedStatus {
          pinned
        }
        parentId
        slug
        createdAt
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
        children {
          parentId
          slug
          description
          featuredAt
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
          geoFence
          id
          name
          description
          tags
        }
        description
        featuredAt
        geoFence
        id
        name
        tags
      }
    }
  }
`
