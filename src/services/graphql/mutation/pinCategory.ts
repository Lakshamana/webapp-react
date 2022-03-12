import { gql } from '@apollo/client'

export const MUTATION_PIN_CATEGORY = gql`
  mutation ($categoryId: String!) {
    pinCategory(categoryId: $categoryId) {
      id
      pinnedAt
    }
  }
`
