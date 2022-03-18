import { gql } from '@apollo/client'

export const QUERY_FEATURED_CATEGORIES_BILLBOARD = gql`
  query GetFeaturedCategoriesBillboard($limit: Int, $skip: Int) {
    categories(filter: { featuredAtExists: true }, limit: $limit, skip: $skip) {
      id
      name
      description
      image {
        id
        imgPath
      }
      cover {
        id
        imgPath
      }
      banner {
        id
        imgPath
      }
      parentId
      createdAt
      featuredAt
      pinnedAt
    }
  }
`
