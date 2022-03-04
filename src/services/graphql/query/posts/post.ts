import { gql } from '@apollo/client'

export const QUERY_POST = gql`
  query GetPost($id: String!) {
    post(id: $id) {
      ... on PostCommon {
        __typename
      }
      ... on VideoPost {
        description
        media {
          baseUrl
          duration
          hlsPath
          subtitles {
            mediaId
          }
          mp4Path
        }
        mediaPosition {
          percent
          seconds
        }
        id
        title
        access
        counts {
          countComments
          countReactions
          countUniqueCommenters
          countViews
          countUniqueCommenters
          # TO-DO: This is an API problem
          # engagedUsers {}
          reactions {
            count
            name
          }
        }
        featuredAt
        myReactions {
          count
          name
        }
        publishedAt
        pinnedAt
        createdAt
      }
      ... on RedactedVideoPost {
        entitlements {
          prices {
            badge
          }
        }
      }
      ... on OnDemandPost {
        description
        thumbnail {
          id
          imgPath
          height
          width
        }
      }
      ... on RedactedOnDemandPost {
        entitlements {
          prices {
            badge
          }
        }
      }
      ... on AudioPost {
        description
        audioTitle
        audioArtist
        mediaPosition {
          seconds
        }
        thumbnail {
          id
          imgPath
          height
          width
        }
      }
    }
  }
`
