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
