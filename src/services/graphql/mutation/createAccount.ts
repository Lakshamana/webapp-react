import { gql } from "@apollo/client"

export const MUTATION_CREATE_ACCOUNT = gql`
	mutation CreateAccount($createAccount: CreateAccountInput!) {
		createAccount(createAccountInput: $createAccount) {
			_id
			display_name
			email
			first_name
			last_name
			status
			tenant_id
			username
			__typename
		}
	}
`
