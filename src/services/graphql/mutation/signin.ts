import { gql } from "@apollo/client"

export const MUTATION_SIGNIN = gql`
	mutation Signin($signIn: SignInInput!) {
		signIn(signIn: $signIn) {
			accessToken
		}
	}
`
