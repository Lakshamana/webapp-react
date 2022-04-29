import { gql } from "@apollo/client"

export const MUTATION_RESET_PASSWORD = gql`
	mutation ResetPassword($payload: ForgotPassword!) {
		resetPassword(payload: $payload) {
			sent
		}
	}
`
