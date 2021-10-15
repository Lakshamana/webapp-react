import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { TemplateProvider } from 'components/templates'
import reportWebVitals from "./reportWebVitals"
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { client } from "services/api/config"
import { ApolloProvider } from "@apollo/client"


Sentry.init({
	dsn: process.env.REACT_APP_SENTRY_DSN,
	integrations: [new Integrations.BrowserTracing()],
	autoSessionTracking: true,
	debug: true,
	tracesSampleRate: 1.0
})

ReactDOM.render(
	<React.StrictMode>
		<TemplateProvider>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</TemplateProvider>
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
