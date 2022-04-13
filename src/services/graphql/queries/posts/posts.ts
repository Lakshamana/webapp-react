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
        myReactions {
          name
        }
        access
        description
        geofence
        kind
        id
        slug
        status
        pinnedStatus {
          pinned
        }
        tags
        thumbnail {
          imgPath
        }
        media {
          ... on MediaVideo {
            duration
          }
        }
        title
        type
        publishedAt
        countComments
        reactions {
          count
          name
        }
        countReactions
        inFeed
      }
    }
  }
`
