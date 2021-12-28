import { gql } from "@apollo/client"

export const MUTATION_SIGNIN = gql`
	mutation Signin($payload: SignInInput!) {
		signIn(payload: $payload) {
			token {
				accessToken
			}
			account {
				id
				display_name
				username
			}
		}
	}
`
