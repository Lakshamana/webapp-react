import { gql } from '@apollo/client'

export const MUTATION_UNPIN_POST = gql`
  mutation UnpinPost($id: String!) {
    unpinPost(id: $id) {
      id
      pinnedAt
      __typename
    }
  }
`
