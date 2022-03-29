import { gql } from '@apollo/client'

export const MUTATION_ACTIVATE_ACCOUNT = gql`
  mutation ActivateAccount($payload: ActivateAccount!) {
    activateAccount(payload: $payload) {
      activated
    }
  }
`
