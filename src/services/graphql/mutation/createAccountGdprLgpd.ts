import { gql } from "@apollo/client"

export const MUTATION_CREATE_ACCOUNT_GDPR = gql`
	mutation CreateAccountGdprLgpd($createAccountGdprLgpd: CreateAccountGdprLgpdInput!) {
		createAccountGdprLgpd(createAccountGdprLgpdInput: $createAccountGdprLgpd) {
			_id
			accepted
			accepted_at
			account {
				_id
			}
			ip
			__typename
		}
	}
`
