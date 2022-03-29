import { gql } from '@apollo/client'

export const QUERY_MEDIA = gql`
  query Media($id: String!) {
    media(id: $id) {
      ... on MediaPhoto {
        imgPath
      }
      ... on MediaVideo {
        thumbnailPath
      }
    }
  }
`
