import { addSeconds, format } from 'date-fns'

export const RANDOM_ID = () => `${Math.random().toString(36).slice(2, 12)}`
export const getItems = (items: any) => items || []
export const getActions = (actions: any) => actions || []

export const kFormatter = (num: number | bigint) => {
  let formatter = Intl.NumberFormat('en', { notation: 'compact' })
  return formatter.format(num)
}

export const formatNumber = (num: number, digits: number) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  const item = lookup
    .slice()
    .reverse()
    .find((item) => num >= item.value)
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0'
}

export function convertToValidColor(color): string | undefined {
  if (!color || !color.replace) return undefined
  const myColor = color.replace(/#(..)(......)/, '#$2$1')
  return myColor || undefined
}

export const convertCamelCaseToDash = (str: string | undefined) => {
  if (!str) return ''

  return str
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([0-9])([^0-9])/g, '$1-$2')
    .replace(/([^0-9])([0-9])/g, '$1-$2')
    .replace(/-+/g, '-')
    .toLowerCase()
}

export const convertDashToCamel = (str: string | undefined) => {
  if (!str) return ''

  return str
    .toLowerCase()
    .replace(/-/g, ' ')
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
}

export const buildUrlFromPath = (
  base: string,
  path: string,
  protocol?: string
): string => {
  if (!base || !path) {
    return ''
  }
  const baseUrl = protocol
    ? `${protocol}://${base.replace(/(^\w+:|^)\/\//, '')}`
    : base

  const url = new URL(path, baseUrl)
  return url.href
}

export const formattedSeconds = (seconds: number) => {
  let helperDate = addSeconds(new Date(0), seconds)
  return format(helperDate, 'mm:ss')
}

export function stripHTML(text: string) {
  return text.replace(/(<([^>]+)>)/gi, '')
}

export function toLowerKeys(obj: Object) {
  return Object.keys(obj).reduce((accumulator, key) => {
    accumulator[key.toLowerCase()] = obj[key]
    return accumulator
  }, {})
}

export function getChannelName(channelUrl: string) {
  const hasChannelInRoute = channelUrl.indexOf('/c/')
  if (hasChannelInRoute === -1) return
  const channelInRoute = channelUrl?.substring(channelUrl.indexOf('c/') + 2)
  const slug = channelInRoute.split('/')[0]

  return slug
}

export function getChannelNameInPath(channelUrl: String) {
  const hasChannelInRoute = channelUrl.indexOf('/c/')
  if (hasChannelInRoute === -1) return
  const channelInRoute = channelUrl?.substring(channelUrl.indexOf('c/') + 2)
  const hasSlash = channelInRoute.indexOf('/')
  const channelName =
    hasSlash > -1
      ? channelInRoute.substring(0, channelInRoute.indexOf('/'))
      : channelInRoute
  return convertDashToCamel(channelName)
}

export const abbreviateNumber = (value: number) => {
  const suffixes = ['', 'k', 'm', 'b', 't']
  let suffixNum = Math.floor(('' + value).length / 3)
  let shortValueToString: string
  let shortValue = parseFloat(
    (suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
  )

  shortValueToString =
    shortValue % 1 !== 0 ? shortValue.toFixed(1) : String(shortValue)

  return shortValueToString + suffixes[suffixNum]
}

export function convertCountMessage(
  t: any,
  data: number,
  translateMapper: Array<string>
) {
  const countMessages = abbreviateNumber(data)
  if (Number(countMessages) === 0) return t(translateMapper[0])
  const defineMessage =
    Number(countMessages) === 1 ? t(translateMapper[1]) : t(translateMapper[2])
  return `${countMessages} ${defineMessage}`
}
