import { gql } from '@apollo/client'

export const MUTATION_ADD_PENDING_ORDER = gql`
  mutation addPendingOrder ($product: String!) {
    addPendingOrder(payload: { product: $product }) {
      id
      status
      account
    }
  }
`
