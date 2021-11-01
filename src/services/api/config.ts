import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { AUTH_TOKEN } from 'config/constants';

const { REACT_APP_API_ENDPOINT, REACT_APP_ORGANIZATION_URL }  = process.env

const httpLink = createHttpLink({
	uri: `https://${REACT_APP_API_ENDPOINT}/graphql`
})

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem(AUTH_TOKEN)
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
			organization: REACT_APP_ORGANIZATION_URL
		}
	}
})

const Client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache()
})

export { Client }
