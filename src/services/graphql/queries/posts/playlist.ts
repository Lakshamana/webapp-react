import { gql } from '@apollo/client'

export const QUERY_PLAYLIST = gql`
  query GetPlaylist($id: ID!, $postsFilters: PostFilter!) {
    playlist(id: $id) {
      id
      title
      posts(postsFilters: $postsFilters) {
        hasNextPage
        hasPreviousPage
        isFirstPage
        isLastPage
        page
        pageCount
        total
        rows {
          id
          access
          title
          description
          kind
          slug
          pinnedStatus {
            pinned
          }
          thumbnail {
            imgPath
          }
          media {
            ... on MediaVideo {
              id
              duration
              thumbnailPath
              baseUrl
            }
          }
          type
        }
      }
      __typename
    }
  }
`
