import { gql } from "@apollo/client"

export const MUTATION_RESET_PASSWORD = gql`
	mutation ResetPassword($forgotPassword: ForgotPassword!) {
		resetPassword(forgotPassword: $forgotPassword) {
			sent
		}
	}
`
