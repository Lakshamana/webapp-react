import { gql } from '@apollo/client'

export const MUTATION_REFRESH_FIREBASE_TOKEN = gql`
  mutation RefreshFirebaseToken {
    refreshToken {
      refreshToken {
        firebaseToken
      }
    }
  }
`
