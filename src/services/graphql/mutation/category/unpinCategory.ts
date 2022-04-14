import { gql } from '@apollo/client'

export const MUTATION_UNPIN_CATEGORY = gql`
  mutation UnpinCategory($id: String!) {
    unpinCategory(categoryId: $id) {
      pinned
    }
  }
`
