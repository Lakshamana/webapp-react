export type AlertType = 'warning' | 'error' | 'success' | 'info'

export type AlertObjectType = {
  message: string
  type: AlertType
}

export type SocialType = 'facebook' | 'google' | 'twitter'

export type EntityType = 'public' | 'exclusive' | 'private' | 'geolocked'

export type ColorMode = 'dark' | 'light'

export type HeroBannerProps = {
  title?: string
  description?: string
  desktopImage?: string
  mobileImage?: string
  children?: JSX.Element | JSX.Element[]
}

export const enum BillboardTarget {
  Home = 'HOME',
  Live = 'LIVE',
}
