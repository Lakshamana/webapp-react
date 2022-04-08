import { gql } from '@apollo/client'

export const QUERY_CATEGORY = gql`
  query GetCategoryWithPosts($categoryId: ID!, $postId: String!) {
    category(id: $categoryId) {
      id
      access
      createdAt
      pinnedAt
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
        geoFence
        pinnedAt
        id
        name
        description
        tags
        customization {
          thumbnail {
            imgPath
          }
        }
      }
      description
      featuredAt
      geoFence
      id
      name
      tags
    }
    posts(filters: { categories: [$postId], typeIn: [VIDEO, ON_DEMAND] }) {
      hasNextPage
      hasPreviousPage
      isFirstPage
      isLastPage
      page
      pageCount
      pageNumberIsGood
      pageSize
      rows {
        id
        access
        title
        description
        pinnedAt
        geofence
        slug
        status
        thumbnail {
          imgPath
        }
        media {
          ... on MediaVideo {
            duration
          }
        }
      }
    }
  }
`
