import { gql } from "@apollo/client";

export const ACTIVE_SUBSCRIPTION = gql`
  query ActiveSubscriptons {
    activeSubscriptons {
      # account
      amount
      # createdAt
      # customFields
      invoices
      # payment
      product
      status
      subscription
      # updatedAt
      id
    }
  }
`
