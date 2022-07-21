import { gql } from '@apollo/client'

export const MUTATION_UPDATE_PROFILE = gql`
  mutation UpdateMyProfile($payload: UpdateProfileInput!) {
    updateMyProfile(payload: $payload) {
      address
      avatar {
        imgPath
      }
      birthday
      custom_fields
      gender
      phone
      locale
    }
  }
`
