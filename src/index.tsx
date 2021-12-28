import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TemplateProvider } from "components/templates";
import reportWebVitals from "./reportWebVitals";

// Disable iconify caching in LocalStorage
disableCache('local')

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
