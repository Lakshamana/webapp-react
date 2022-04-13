import { gql } from '@apollo/client'

export const ADD_COMMENT = gql`
  mutation addComment($payload: AddComment!) {
    addComment(payload: $payload) {
      countComments
      author {
        displayName
        username
      }
      id
      description
      createdAt
      countUpVotes
      content
    }
  }
`

export const DELETE_COMMENT = gql`
  mutation deleteComment($id: String!) {
    deleteComment(id: $id) {
      countComments
    }
  }
`

