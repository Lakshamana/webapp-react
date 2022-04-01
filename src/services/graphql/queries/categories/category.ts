import { gql } from '@apollo/client'

export const QUERY_CATEGORY = gql`
  query GetCategoryWithPosts($id: String!) {
    category(id: $id) {
      id
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
        geoFence
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
    posts(filters: { categories: [$id], type: VIDEO }) {
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
