import { gql } from '@apollo/client'

export const MUTATION_UNPIN_CATEGORY = gql`
  mutation UnpinCategory($categoryId: String!) {
    unpinCategory(categoryId: $categoryId) {
      id
      pinnedAt
    }
  }
`
