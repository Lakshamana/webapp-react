import { gql } from '@apollo/client'

export const QUERY_POSTS = gql`
  query GetPosts($filter: PostFilter, $pagination: Pagination, $sort: Sort) {
    posts(filters: $filter, pagination: $pagination, sort: $sort) {
      access
      description
      geofence
      kind
      id
      slug
      status
      tags
      thumbnail
      title
      type
      publishedAt
    }
  }
`
