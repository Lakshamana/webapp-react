import { gql } from '@apollo/client'

export const QUERY_BILLBOARDS = gql`
  query GetBillboards($filter: FindBillboardsInput) {
    billboards(filter: $filter) {
      hasNextPage
      hasPreviousPage
      isFirstPage
      isLastPage
      page
      pageNumberIsGood
      pageSize
      rows {
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
  }
`
