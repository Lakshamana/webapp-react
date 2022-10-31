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
        sort
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
        children(filter: { sortBy: "sort.asc" }) {
          parentId
          slug
          description
          featuredAt
          sort
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
        }
        description
        featuredAt
        geoFence
        id
        name
      }
    }
  }
`

export const QUERY_PUBLIC_CATEGORIES = gql`
  query GetPublicCategories($filter: CategoryFilter) {
    publicCategories(filter: $filter) {
      hasNextPage
      hasPreviousPage
      isFirstPage
      isLastPage
      page
      pageNumberIsGood
      pageSize
      rows {
        id
        parentId
        slug
        sort
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
        children(filter: { sortBy: "sort.asc" }) {
          parentId
          slug
          description
          featuredAt
          sort
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
        }
        description
        featuredAt
        geoFence
        id
        name
      }
    }
  }
`

export const QUERY_CATEGORIES_CARDS = gql`
  query GetCategoriesCards($filter: CategoryFilter) {
    categories(filter: $filter) {
      hasNextPage
      hasPreviousPage
      isFirstPage
      isLastPage
      page
      pageNumberIsGood
      pageSize
      rows {
        id
        name
        access
        description
        pinnedStatus {
          pinned
        }
        slug
        kind
        customization {
          thumbnail {
            imgPath
          }
        }
        children(filter: { sortBy: "sort.asc" }) {
          id
          name
          access
          description
          pinnedStatus {
            pinned
          }
          slug
          kind
          customization {
            thumbnail {
              imgPath
            }
          }
        }
      }
    }
  }
`
export const QUERY_PUBLIC_CATEGORIES_CARDS = gql`
  query GetPublicCategoriesCards($filter: CategoryFilter) {
    publicCategories(filter: $filter) {
      hasNextPage
      hasPreviousPage
      isFirstPage
      isLastPage
      page
      pageNumberIsGood
      pageSize
      rows {
        id
        name
        description
        slug
        kind
        customization {
          thumbnail {
            imgPath
          }
        }
        children(filter: { sortBy: "sort.asc" }) {
          id
          name
          description
          slug
          kind
          customization {
            thumbnail {
              imgPath
            }
          }
        }
      }
    }
  }
`
