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
    posts(filters: { category: $id }) {
      id
      access
      title
      description
      featured
      geofence
      kind
      slug
      status
      tags
      thumbnail {
        imgPath
      }
      type
      publishedAt
      media {
        ... on MediaVideo {
          duration
        }
      }
    }
  }
`
