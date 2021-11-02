import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TemplateProvider } from "components/templates";
import reportWebVitals from "./reportWebVitals";

import { Client } from "services/api"
import { ApolloProvider } from "@apollo/client";
import "./config/firebase";
import "./config/sentry";
import "./config/i18n";


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
