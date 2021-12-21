import { gql } from '@apollo/client'

export const MUTATION_SOCIAL_SIGNIN = gql`
  mutation SocialSignIn($input: CreateAccountSocialSignInDto!) {
    socialSignIn(input: $input) {
      account {
        id
      }
      token {
        accessToken
      }
    }
  }
`
