import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TemplateProvider } from "components/templates";
import reportWebVitals from "./reportWebVitals";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { Client } from "services/api"
import { ApolloProvider } from "@apollo/client";
import "./config/firebase";
import "./translate";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  autoSessionTracking: true,
  debug: true,
  tracesSampleRate: 1.0,
});

ReactDOM.render(
	<React.StrictMode>
		<TemplateProvider>
			<ApolloProvider client={Client}>
				<App />
			</ApolloProvider>
		</TemplateProvider>
	</React.StrictMode>,
	document.getElementById("root")
)

reportWebVitals();
