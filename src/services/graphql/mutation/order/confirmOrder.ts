import { gql } from '@apollo/client'

export const MUTATION_CONFIRM_ORDER = gql`
  mutation ConfirmOrder($payload: ConfirmOrder!) {
    confirmOrder(payload: $payload) {
      status
    }
  }
`