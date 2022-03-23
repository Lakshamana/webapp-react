import { gql } from '@apollo/client'

export const QUERY_CUSTOM_FIELDS = gql`
  query CustomFields {
    customFields {
      fields {
        id
        name
        required
        type
      }
    }
  }
`
