import { gql } from '@apollo/client'

export const QUERY_MEDIA = (ids) => gql`
query Media {
  ${ids?.map(
    (id, index) =>
      `media${index}: media(id: "${id}") {
        ... on MediaAudio {
          id
          status
          baseUrl
        }
        ... on MediaPhoto {
          imgPath
          id
          status
          baseUrl
        }
        ... on MediaVideo {
          baseUrl
          thumbnailPath
          id
          status
        }
      }`,
    ''
  )}
}
`

export const QUERY_SINGLE_MEDIA = gql`
  query Media($id: String!) {
    media(id: $id) {
      ... on MediaAudio {
        id
        status
        baseUrl
      }
      ... on MediaPhoto {
        imgPath
        id
        status
        baseUrl
      }
      ... on MediaVideo {
        baseUrl
        thumbnailPath
        id
        status
      }
    }
  }
`
