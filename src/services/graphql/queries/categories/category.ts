import { gql } from '@apollo/client'

export const QUERY_CATEGORY = gql`
  query GetCategory($slug: String) {
    category(slug: $slug) {
      id
      access
      slug
      createdAt
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
      }
      children(filter: { sortBy: "sort.asc" }) {
        sort
        description
        featuredAt
        geoFence
        pinnedStatus {
          pinned
        }
        name
        slug
        id
        description
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
    }
  }
`

export const QUERY_VERIFY_CATEGORY_KIND = gql`
  query GetCategoryKind($slug: String) {
    category(slug: $slug) {
      id
      access
      kind
      name
    }
  }
`
