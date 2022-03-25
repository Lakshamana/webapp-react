import { gql } from '@apollo/client'

export const QUERY_CATEGORIES = gql`
  query GetCategories($filter: CategoryFilter, $pagination: PaginationArgs!) {
    categories(filter: $filter, pagination: $pagination) {
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
      children(pagination: { limit: 10 }) {
        description
        featuredAt
        geoFence
        id
        name
        customization {
        thumbnail {
          imgPath
        }
      }
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
`
