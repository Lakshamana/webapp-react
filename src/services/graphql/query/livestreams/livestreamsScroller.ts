import { gql } from '@apollo/client'

export const QUERY_LIVESTREAMS_SCROLLER = gql`
  query GetLivestreamsScroller(
    $filter: LivestreamFilter
    $limit: Int
    $skip: Int
    $orderBy: [LivestreamTypeSortDirective]
  ) {
    livestreams(
      filter: $filter
      limit: $limit
      skip: $skip
      orderBy: $orderBy
    ) {
      ... on LivestreamEvent {
        id
        access
        title
        description
        status
        scheduledStartAt
        thumbnail {
          id
          imgPath
        }
      }
      ... on RedactedLivestreamEvent {
        id
        access
        title
        description
        status
        scheduledStartAt
        reason
        thumbnail {
          id
          imgPath
        }
      }
    }
  }
`
