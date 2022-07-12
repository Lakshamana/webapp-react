import { gql } from '@apollo/client'

export const QUERY_GET_ORDER_RESULT = gql`
  query getOrderResult($id: String!) {
    order(id: $id) {
      id
      account
      status
    }
  }
`
