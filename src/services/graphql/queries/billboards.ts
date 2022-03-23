import { gql } from '@apollo/client'

export const QUERY_BILLBOARDS = gql`
  query GetBillboards($filter: FindBillboardsInput) {
    billboards(filter: $filter) {
      id
      title
      description
      actions {
        bgColor
        borderColor
        icon
        label
        route
        textColor
      }
      customization {
        desktop {
          imgPath
        }
        mobile {
          imgPath
        }
      }
      delay
      sort
    }
  }
`
