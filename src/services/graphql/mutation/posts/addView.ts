import { gql } from '@apollo/client'

export const MUTATION_ADD_VIEW = gql`
  mutation AddView($postId: String!) {
    addView(postId: $postId) {
      countViewsTotal
    }
  }
`
