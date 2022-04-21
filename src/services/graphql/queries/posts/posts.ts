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
        id
        myReactions {
          name
        }
        access
        description
        geofence
        kind
        slug
        status
        pinnedStatus {
          pinned
        }
        thumbnail {
          imgPath
        }
        media {
          ... on MediaVideo {
            id
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

export const QUERY_POSTS_CARDS = gql`
  query GetPostsCards($filter: PostFilter) {
    posts(filters: $filter) {
      hasNextPage
      hasPreviousPage
      isFirstPage
      isLastPage
      page
      pageCount
      total
      rows {
        id
        access
        title
        description
        kind
        slug
        pinnedStatus {
          pinned
        }
        thumbnail {
          imgPath
        }
        media {
          ... on MediaVideo {
            id
            duration
            thumbnailPath
          }
        }
        type
      }
    }
  }
`

