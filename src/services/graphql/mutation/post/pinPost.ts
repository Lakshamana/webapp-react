import { gql } from '@apollo/client'

export const MUTATION_PIN_POST = gql`
  mutation PinPost($postId: String!) {
    pinPost(postId: $postId) {
      ... on VideoPost {
        id
        pinnedAt
      }
      ... on RedactedVideoPost {
        id
        pinnedAt
      }
      ... on OnDemandPost {
        id
        pinnedAt
      }
      ... on RedactedOnDemandPost {
        id
        pinnedAt
      }
      ... on AudioPost {
        id
        pinnedAt
      }
      ... on RedactedAudioPost {
        id
        pinnedAt
      }
      ... on PhotoPost {
        id
        pinnedAt
      }
      ... on RedactedPhotoPost {
        id
        pinnedAt
      }
      ... on TextPost {
        id
        pinnedAt
      }
      ... on RedactedTextPost {
        id
        pinnedAt
      }
      ... on Poll {
        id
        pinnedAt
      }
      ... on RedactedPoll {
        id
        pinnedAt
      }
    }
  }
`
