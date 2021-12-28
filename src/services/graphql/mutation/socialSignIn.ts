import { gql } from '@apollo/client'

export const MUTATION_SOCIAL_SIGNIN = gql`
  mutation SocialSignIn($input: CreateAccountSocialSignInDto!) {
    socialSignIn(input: $input) {
      account {
        id
        display_name
        username
        status {
          gdpr
        }
      }
      token {
        accessToken
      }
    }
  }
`
