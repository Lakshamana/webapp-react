import React from "react"
import ReactDOM from "react-dom"
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache
} from "@apollo/client";
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";


const client = new ApolloClient({
	uri: `https://${process.env.REACT_APP_API_ENDPOINT}/graphql`,
	cache: new InMemoryCache(),
	credentials: "include",
	resolvers: {}
});

Sentry.init({
	dsn: process.env.REACT_APP_SENTRY_DSN,
	integrations: [new Integrations.BrowserTracing()],
	autoSessionTracking: true,
	debug: true,
	tracesSampleRate: 1.0
})

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
