import { gql } from '@apollo/client'

export const MUTATION_UNPIN_CATEGORY = gql`
  mutation UnpinCategory($id: String!) {
    unpinCategory(id: $id) {
      id
      pinnedAt
      __typename
    }
  }
`
