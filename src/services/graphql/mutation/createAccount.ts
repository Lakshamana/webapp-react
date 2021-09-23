import { gql } from "@apollo/client"

export const MUTATION_CREATE_ACCOUNT = gql`
	mutation CreateAccount($createAccountCreateAccountInput: CreateAccountInput!) {
		createAccount(createAccountInput: $createAccountCreateAccountInput) {
			_id
			display_name
			email
			first_name
			last_name
			status
			username
		}
	}
`
