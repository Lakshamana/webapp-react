import * as Sentry from "@sentry/react"
import { Integrations } from "@sentry/tracing"

const sentryConfig = {
	dsn: process.env.REACT_APP_SENTRY_DSN,
	integrations: [new Integrations.BrowserTracing()],
	autoSessionTracking: true,
	debug: false,
	tracesSampleRate: 1.0
}

const sentry = Sentry.init(sentryConfig)

export default sentry
