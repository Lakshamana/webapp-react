import { gql } from '@apollo/client'

export const QUERY_POSTS_SCROLLER = gql`
  query GetPostsScroller(
    $filter: PostFilter
    $limit: Int
    $skip: Int
    $orderBy: [PostTypeSortDirective]
  ) {
    posts(filter: $filter, limit: $limit, skip: $skip, orderBy: $orderBy) {
      ... on VideoPost {
        id
        type
        title
        description
        status
        publishedAt
        access
        thumbnail {
          id
          imgPath
        }
        media {
          id
          imgPath
          duration
        }
        counts {
          id
          countViewsTotal
        }
        pinnedAt
      }
      ... on OnDemandPost {
        id
        type
        title
        description
        status
        access
        publishedAt
        thumbnail {
          id
          imgPath
        }
        media {
          id
          imgPath
          duration
        }
        counts {
          id
          countViewsTotal
        }
        pinnedAt
      }
      ... on RedactedVideoPost {
        id
        type
        title
        status
        access
        reason
        publishedAt
        media {
          id
          duration
          imgPath
        }
        counts {
          id
          countViewsTotal
        }
        thumbnail {
          id
          imgPath
        }
        pinnedAt
      }
      ... on RedactedOnDemandPost {
        id
        type
        title
        status
        publishedAt
        access
        reason
        media {
          id
          duration
          imgPath
        }
        counts {
          id
          countViewsTotal
        }
        thumbnail {
          id
          imgPath
        }
        pinnedAt
      }
    }
  }
`
