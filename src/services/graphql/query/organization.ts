import { gql } from "@apollo/client"

export const QUERY_ORGANIZATION = gql`
	quey Organization($organizationId: String!) {
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
