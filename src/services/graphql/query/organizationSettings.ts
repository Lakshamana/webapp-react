import { gql } from "@apollo/client"

export const QUERY_ORGANIZATION_SETTINGS = gql`
	quey Organization($organizationId: String!) {
		organization(id: $organizationId) {
            _id
            settings
          } 
	}
`
