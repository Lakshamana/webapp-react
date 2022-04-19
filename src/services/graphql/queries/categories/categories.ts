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
        kind
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
            __typename
          }
          geoFence
          id
          kind
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
