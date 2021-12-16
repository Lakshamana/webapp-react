import { gql } from '@apollo/client'

export const MUTATION_SIGNOUT = gql`
  mutation SignOut($payload: RefreshTokenInput!) {
    signOut(payload: $payload)
  }
`
