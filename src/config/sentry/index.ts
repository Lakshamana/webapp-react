import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

const sentryConfig = {
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new BrowserTracing()],
  maxBreadcrumbs: 50,
  debug: process.env.NODE_ENV === 'development',
  tracesSampleRate: 0.5,
}

const sentry = process.env.REACT_APP_SENTRY_DSN ? Sentry.init(sentryConfig) : null

export default sentry
