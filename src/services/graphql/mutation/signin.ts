import { gql } from "@apollo/client"

export const MUTATION_SIGNIN = gql`
	mutation Signin($signInSignIn: SignInInput!) {
		signIn(signIn: $signInSignIn) {
			accessToken
		}
	}
`
