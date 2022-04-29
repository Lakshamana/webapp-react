import { gql } from '@apollo/client'

export const MUTATION_PIN_CATEGORY = gql`
  mutation PinCategory($payload: CreateAccountPinnnedCategory!) {
    pinCategory(payload: $payload) {
      pinned
    }
  }
`
