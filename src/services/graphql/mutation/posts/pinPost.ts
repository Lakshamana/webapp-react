import { gql } from '@apollo/client'

export const MUTATION_PIN_POST = gql`
  mutation PinPost($payload: CreateAccountPinnedPost!) {
    pinPost(payload: $payload) {
      pinned
    }
  }
`
