import { gql } from '@apollo/client'

export const QUERY_CATEGORIES = gql`
  query GetCategories($filter: CategoryFilter, $pagination: PaginationArgs!) {
    categories(filter: $filter, pagination: $pagination) {
      access
      createdAt
      customization {
        banner
        cover
        thumbnail
      }
      children(pagination: { limit: 10 }) {
        description
        featuredAt
        geoFence
        id
        name
        description
        tag
        customization {
          banner
          cover
          thumbnail
        }
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
