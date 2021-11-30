import { gql } from "@apollo/client"

export const MUTATION_UPDATE_PASSWORD = gql`
	mutation UpdatePassword($updatePassword: UpdatePassword!) {
		updatePassword(updatePassword: $updatePassword) {
			success
		}
	}
`
