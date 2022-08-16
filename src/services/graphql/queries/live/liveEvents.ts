import { gql } from '@apollo/client'

export const QUERY_LIVE_EVENTS = gql`
  query GetLiveEvents($filter: LiveEventFilter) {
    liveEvents(filter: $filter) {
      hasNextPage
      hasPreviousPage
      isFirstPage
      isLastPage
      page
      pageCount
      pageNumberIsGood
      pageSize
      rows {
        id
        access
        createdAt
        description
        kind
        scheduledStartAt
        slug
        status
        thumbnail {
          imgPath
        }
        title
        __typename
      }
    }
  }
`
// Query to access live events with anonymous token
export const QUERY_PUBLIC_LIVE_EVENTS = gql`
  query GetPublicLiveEvents($filter: LiveEventFilter) {
    publicLiveEvents(filter: $filter) {
      hasNextPage
      hasPreviousPage
      isFirstPage
      isLastPage
      page
      pageCount
      pageNumberIsGood
      pageSize
      rows {
        id
        access
        createdAt
        description
        kind
        scheduledStartAt
        slug
        status
        thumbnail {
          imgPath
        }
        title
        __typename
      }
    }
  }
`
