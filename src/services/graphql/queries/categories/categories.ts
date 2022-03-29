import { gql } from '@apollo/client'

export const QUERY_CATEGORIES = gql`
  query GetCategories($filter: CategoryFilter) {
    categories(filter: $filter) {
      count
      hasNextPage
      hasPreviousPage
      isFirstPage
      isLastPage
      page
      pageNumberIsGood
      pageSize
      rows {
        access
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
          description
          featuredAt
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
          tag
        }
        description
        featuredAt
        geoFence
        id
        name
        tag
      }
    }
  }
`
