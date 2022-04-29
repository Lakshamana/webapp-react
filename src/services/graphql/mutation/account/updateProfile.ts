import { gql } from '@apollo/client'

export const MUTATION_UPDATE_PROFILE = gql`
  mutation UpdateMyProfile($payload: UpdateProfileInput!) {
    updateMyProfile(payload: $payload) {
      address
      birthday
      custom_fields
      gender
      phone
      locale
    }
  }
`
