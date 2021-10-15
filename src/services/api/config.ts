import { ApolloClient, InMemoryCache } from "@apollo/client"

const API_URL = process.env.REACT_APP_API_DEV_URL

const client = new ApolloClient({
	uri: `https://${API_URL}/graphql`,
	cache: new InMemoryCache(),
	credentials: "include",
	resolvers: {}
})

export { client }
