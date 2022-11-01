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
        countViewsTotal
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
            thumbnailPath
            baseUrl
          }
          ... on MediaAudio {
            id
            duration
          }
          ... on MediaPhoto {
            id
            imgPath
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

export const QUERY_PUBLIC_POSTS = gql`
  query GetPubicPosts($filter: PostFilter) {
    publicPosts(filters: $filter) {
      hasNextPage
      hasPreviousPage
      isFirstPage
      isLastPage
      page
      pageCount
      total
      rows {
        id
        countViewsTotal
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
            thumbnailPath
            baseUrl
          }
          ... on MediaAudio {
            id
            duration
          }
          ... on MediaPhoto {
            id
            imgPath
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
        countViewsTotal
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
            baseUrl
          }
          ... on MediaPhoto {
            id
            imgPath
          }
        }
        type
      }
    }
  }
`

export const QUERY_PUBLIC_POSTS_CARDS = gql`
  query GetPublicPostsCards($filter: PostFilter) {
    publicPosts(filters: $filter) {
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
        countViewsTotal
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
            baseUrl
          }
          ... on MediaPhoto {
            id
            imgPath
          }
        }
        type
      }
    }
  }
`
