export type AlertType = 'warning' | 'error' | 'success' | 'info'

export type AlertObjectType = {
  message: string
  type: AlertType
}

export type SocialType = 'facebook' | 'google' | 'twitter'

export type ColorMode = 'dark' | 'light'

export type HeroBannerProps = {
  title?: string
  description?: string
  desktopImage?: string
  mobileImage?: string
  children?: JSX.Element | JSX.Element[]
}

export const enum HomeCarouselsTypes {
  Posts = 'POSTS',
  Livestreams = 'LIVESTREAMS',
  ContinueWatching = 'CONTINUE_WATCHING',
  Collections = 'COLLECTIONS',
}

export const enum BillboardTarget {
  Home = 'HOME',
  Live = 'LIVE',
}
