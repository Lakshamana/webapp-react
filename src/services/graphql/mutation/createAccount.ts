import { gql } from "@apollo/client"

export const MUTATION_CREATE_ACCOUNT = gql`
	mutation CreateAccount($createAccount: CreateAccountInput!) {
		createAccount(createAccountInput: $createAccount) {
			id
			display_name
			email
			first_name
			last_name
			status {
				active
				block_perm
				block_temp
				pending_activation
			}
			tenant_id
			username
			__typename
		}
	}
`
