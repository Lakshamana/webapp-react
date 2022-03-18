import { gql } from '@apollo/client'

export const QUERY_PINNED_CATEGORIES = gql`
  query GetPinnedCategories {
    pinnedCategories(orderBy: { name: sort, direction: ASC }, limit: 0) {
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
