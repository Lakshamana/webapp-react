import { gql } from "@apollo/client"

export const MUTATION_CREATE_ACCOUNT_GDPR = gql`
	mutation CreateAccountGdprLgpd($createAccountGdprLgpd: CreateAccountGdprLgpdInput!) {
		createAccountGdprLgpd(payload: $createAccountGdprLgpd) {
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
