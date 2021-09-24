import { gql } from "@apollo/client"

export const MUTATION_SIGNOUT = gql`
	mutation SignOut($signOutSignOut: RefreshTokenInput!) {
		signOut(signOut: $signOutSignOut) 
	}
`
