import { gql } from "@apollo/client"

export const MUTATION_CREATE_ACCOUNT_GDPR = gql`
	mutation CreateAccountGdprLgpd($payload: CreateAccountGdprLgpdInput!) {
		createAccountGdprLgpd(payload: $payload) {
			id
			accepted
			accepted_at
			account {
				id
			}
			__typename
		}
	}
`
