import { gql } from '@apollo/client'

export const QUERY_PRODUCT = gql`
  query GetProduct($id: String!) {
    product(id: $id) {
      description
      imageUrl
      isActive
      metadata {
        key
        value
      }
      name
      productPrices {
        id
        billingTypes {
          id
          name
        }
        currency {
          isoCode
        }
        billingPeriods {
          id
          name
        }
        recurringUsageTypes {
          id
          name
        }
        internalDescription
        unitPrice
      }
      unitLabel
    }
  }
`
