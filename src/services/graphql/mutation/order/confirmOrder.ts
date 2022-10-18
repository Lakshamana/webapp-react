import { gql } from '@apollo/client'

export const MUTATION_CONFIRM_ORDER = gql`
  mutation ConfirmOrder($payload: ConfirmOrder!) {
    confirmOrder(payload: $payload) {
      id
      status
      subscription
      invoice
    }
  }
`

export const MUTATION_ONE_TIME_PAYMENT = gql`
  mutation OneTimePayment($payload: ConfirmOrder!) {
    oneTimePayment(payload: $payload) {
      id
      status
      subscription
      invoice
    }
  }
`
