import { gql } from '@apollo/client'

export const QUERY_POSTS = gql`
  query GetPosts($filter: PostFilter) {
    posts(filters: $filter) {
      hasNextPage
      hasPreviousPage
      isFirstPage
      isLastPage
      page
      pageCount
      total
      rows {
        access
        description
        geofence
        kind
        id
        slug
        status
        tags
        thumbnail {
          imgPath
        }
        title
        type
        publishedAt
        countComments
      }
    }
  }
`
