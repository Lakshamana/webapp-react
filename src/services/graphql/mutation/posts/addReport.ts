import { gql } from '@apollo/client'

export const MUTATION_ADD_REPORT = gql`
  mutation AddReport($payload: AddReport!) {
    addReport(payload: $payload) {
      status
    }
  }
`
