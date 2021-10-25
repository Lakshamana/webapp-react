import { gql } from "@apollo/client"

export const QUERY_ORGANIZATION = gql`
	query Organization($organizationId: String!) {
		organization(id: $organizationId) {
            _id
            logo
            name
            icon
            one_signal_id
            identifier
            status
          } 
	}
`
