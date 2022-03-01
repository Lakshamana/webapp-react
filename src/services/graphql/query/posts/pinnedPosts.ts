import { gql } from '@apollo/client'

export const QUERY_PINNED_POSTS = gql`
  query GetPinnedPosts {
    pinnedPosts(orderBy: { name: publishedAt, direction: ASC }, limit: 0) {
      ... on VideoPost {
        id
        type
        title
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
