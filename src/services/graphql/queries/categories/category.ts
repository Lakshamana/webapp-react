import { gql } from '@apollo/client'

export const QUERY_CATEGORY = gql`
  query GetCategory($slug: String) {
    category(slug: $slug) {
      id
      access
      slug
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
        slug
        id
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
  }
`
