import { gql } from "@apollo/client"

export const QUERY_ORGANIZATION_SETTINGS = gql`
	query Organization($organizationId: String!) {
		organization(id: $organizationId) {
            _id
            settings
          } 
	}
`
