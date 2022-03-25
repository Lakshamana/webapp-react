import { gql } from '@apollo/client'

export const QUERY_CATEGORY = gql`
  query GetCategory($id: String!) {
    category(id: $id) {
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
        description
        tag
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
      tag
    }
  }
`
