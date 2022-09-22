import {
  createAnalyticsInstance,
  Json,
  JsonRecord
} from '@fanhero/web-analytics'

import { getCookieConsentValue } from 'react-cookie-consent'

import { name as appName, version as appVersion } from '../../../package.json'

import { configEnvs } from '../envs'

import { getData } from 'services/storage'

import { APP_LOCALE, APP_USER, CHANNEL_INFO } from 'config/constants'

import {
  AuthReport,
  MediaPlayerReport,
  PostCategoriesReport,
  PostCommentReport,
  PostReactionReport
} from './types'

const heartbeatIntervalMs = 10000

//TODO: Need to change bucket
const bucket = 'com.fanhero.5c926da8e117d200047d500e'

let _channelId: Maybe<string> = null
let _instance: Maybe<ReturnType<typeof createAnalyticsInstance>> = null
let _rtInstance: Maybe<ReturnType<typeof createAnalyticsInstance>> = null
let _userId: Maybe<string> = null

let lastKnownLocale = 'en'
let lastKnownRoute = '/'

const getBaseProps = (): JsonRecord => ({
  heartbeatIntervalMs,
  lastKnownLocale,
  lastKnownRoute,
  schemaBuild: 1,
  schemaName: 'web-app-vanilla',
  username: '',
})

const getRTInstance = () => {
  if (!_rtInstance && configEnvs.analyticsAPI) {
    _rtInstance = createAnalyticsInstance({
      appName,
      appVersion,
      bucket,
      debug: process.env.NODE_ENV === 'development',
      // todo: do we have a RT API ?
      destinations: [configEnvs.analyticsAPI],
      flushAt: 1,
      flushTimeoutSecs: 1,
      headers: {
        platform: 'web-rt',
        'x-api-key': '',
        'Content-Type': 'application/json',
      },
      organization: configEnvs.organization,
    })
  }
  _rtInstance?.flush()

  return _rtInstance
}

/** analytics method to *track* single-ended non-specific RT events */
export const rtLog = (event: string, properties?: any) =>
  getRTInstance()
    ?.track(event.toUpperCase(), {
      ...Object(safeParse(properties)),
      ...getBaseProps(),
    })
    .catch((err) => console.log(`could not RT track-${err}`))
    .finally(() => getRTInstance()?.flush(() => true))

const safeParse = (value: any): Json => {
  try {
    return JSON.parse(JSON.stringify(value))
  } catch (_) {
    return null
  }
}

/** analytics method to *flush* events */
export const flush = () => {
  getInstance()
    .then((sdk) => {
      sdk?.flush()
    })
    .catch((err) => console.log(`could not flush-${err}`))
}
/** analytics method to *track* non-specific events */
export const log = (event: string, properties?: any) =>
  getInstance()
    .then((sdk) => {
      sdk?.track(event, {
        ...Object(safeParse(properties)),
        ...getBaseProps(),
      })
    })
    .catch((err) => console.log(`could not flush-${err}`))

export const mediaPlayerReport = (report: MediaPlayerReport) =>
  log('Media Player Report', report)

export const mediaPlayerReportRT = (report: MediaPlayerReport) =>
  rtLog('Media Player Report', report)

export const postReactionReport = (report: PostReactionReport) =>
  log('Post Reaction Report', report)

export const postLiveReactionReport = (report: PostReactionReport) =>
  log('Post Live Reaction Report', report)

export const postCommentReport = (report: PostCommentReport) =>
  log('Post Comment Report', report)

export const postCategoriesReport = (report: PostCategoriesReport) => {
  log('Post Categories Report', report)
}

export const authReport = (report: AuthReport) => {
  log('Auth Report', report)
}

export const setChannel = (id: Maybe<string>, name?: string) => {
  getInstance()
    .then((sdk) => {
      if (_channelId === id) {
        return
      }

      _channelId = id

      const rtInstance = getRTInstance()

      return sdk
        ?.group(id as string, {
          ...(name ? { name } : {}),
          ...getBaseProps(),
        })
        .then(() => rtInstance?.group(id as string))
        .then(() => rtInstance?.flush(() => true))
    })
    .catch((err) => console.log(`could not track current channel-${err}`))
}

const setLocale = async (locale: string) => {
  if (lastKnownLocale === locale) {
    return
  }

  lastKnownLocale = locale

  return log('Locale Changed')
}

const heartbeat = async () => {
  const channel = getData(CHANNEL_INFO)
  const locale = getData(APP_LOCALE || 'en_US')
  const user = getData(APP_USER)
  try {
    await setChannel(channel?.id)
    await setLocale(locale)
    await setUser(user || 'Anonymous')

    await log('Application Heartbeat')
  } catch (e) {
    console.log('heartbeat failure')
  }
}

const getInstance = async () => {
  console.log('instance')
  if (!_instance) {
    _instance = createAnalyticsInstance({
      appName,
      appVersion,
      bucket,
      debug: process.env.NODE_ENV === 'development',
      destinations: [configEnvs.analyticsAPI || ''],
      flushAt: 200,
      flushTimeoutSecs: 60,
      headers: {
        platform: 'web',
        'x-api-key': '',
        'Content-Type': 'application/json',
      },
      organization: configEnvs.organization,
    })

    // if user don't accept cookies consent we can't send data
    if (!getCookieConsentValue()) return

    await _instance.grantStorageConsent()
    await heartbeat()
    await log('Application Started')

    await heartbeat()
    setInterval(() => void heartbeat().catch(console.warn), heartbeatIntervalMs)

    await log('Application Started')

    await _instance.flush()

    return _instance
  }
}

const parseRoute = ({
  fullPath,
  hash,
  meta,
  params,
  path,
  query,
}: any): JsonRecord => ({
  ...(meta ? { meta: safeParse(meta) } : {}),
  ...(params ? { params: safeParse(params) } : {}),
  ...(query ? { query: String(query) } : {}),
  fullPath,
  hash,
  path,
})

export const setRoute = (to: any, from: any) =>
  getInstance()
    .then((sdk) => {
      if (lastKnownRoute === to.path) {
        return
      }

      lastKnownRoute = to.path

      return sdk?.page(
        to.name.toUpperCase() || '' || to.path || 'Unknown Route',
        {
          ...parseRoute(to),
          previous: parseRoute(from),
          ...getBaseProps(),
        }
      )
    })
    .catch((err) => console.log(`could not track current route-${err}`))

/** to be called as soon as the user gets known, pass `null` when signed out */
export const setUser = (id: Maybe<string>, traits?: any) => {
  getInstance()
    .then((sdk) => {
      if (_userId === id) {
        return
      }

      _userId = id

      const rtInstance = getRTInstance()

      return sdk
        ?.identify(id as string, {
          ...Object(safeParse(traits)),
          ...getBaseProps(),
        })
        .then(() => rtInstance?.identify(id as string))
        .then(() => rtInstance?.flush(() => true))
    })
    .catch((err) => console.log(`could not track current user-${err}`))
}
