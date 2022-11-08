import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'
import { organizationData } from 'config/organization'
import { version as appVersion } from '../../../package.json'

const sentryConfig = {
  dsn: process.env.REACT_APP_SENTRY_DSN,
  release: `${organizationData.name}@${appVersion}`,
  integrations: [new BrowserTracing()],
  maxBreadcrumbs: 40,
  debug: process.env.NODE_ENV === 'development',
  tracesSampleRate: 0.5,
  autoSessionTracking: false,
  environment: process.env.NODE_ENV
}

const sentry = process.env.REACT_APP_SENTRY_DSN
  ? Sentry.init(sentryConfig)
  : null

export default sentry
