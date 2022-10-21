import { HomeCarouselsTypes } from './common'

export type OrganizationFlags = {
  APP_BRAND?: string
  COLORS?: ColorFlags
  DFP_ACTIVE?: boolean
  DISPLAY_SIGNUP_BUTTON?: boolean
  FACEBOOK_PIXEL_CODE?: string
  FACEBOOK_LOGIN?: boolean
  GOOGLE_LOGIN?: boolean
  GDPR_URL?: string
  HEADER?: {
    TABS: TabFlags[]
  }
  IMAGES?: OrgImagesFlags
  LOCALE?: string
  TERMS_URL?: string
  PRIVACY_URL?: string
  THEME?: string
}

export type TabFlags = {
  TAB: string
  IS_ACTIVE: boolean
  ORDER: number
  LABEL: LocaleFlags[]
  URL: string
}

export type OrgImagesFlags = {
  ORGANIZATION_ICON: {
    LIGHT: string
    DARK: string
  }
  ORGANIZATION_LOGO: {
    LIGHT: string
    DARK: string
  }
  LOGIN_BACKGROUND: string
  FAVICON16: string
  FAVICON32: string
  FAVICON64: string
}

export type ChannelImageFlags = {
  CHANNEL_ICON: {
    LIGHT: string
    DARK: string
  }
  CHANNEL_LOGO: {
    LIGHT: string
    DARK: string
  }
  THUMBNAIL: string
}

export type CarouselFlags = {
  IS_ACTIVE: boolean
  DEFAULT: boolean
  ORDER: number
  LABEL: LocaleFlags[]
  CONTENT_TYPE: HomeCarouselsTypes[]
  TAGS: string
}

export type LocaleFlags = {
  LOCALE: string
  VALUE: string
}

export type ColorFlags = {
  ACTION_LINK: {
    LIGHT: string
    DARK: string
  }
  INDICATOR: {
    LIGHT: string
    DARK: string
  }
  LIVE_BADGES: {
    FINISHED: string
    LIVE: string
    UPCOMING: string
  }
  PRIMARY: {
    LIGHT: string
    DARK: string
  }
  PROGRESS: {
    LIGHT: string
    DARK: string
  }
  SECONDARY: {
    LIGHT: string
    DARK: string
  }
}

export type LiveCarouselFlags = {
  TAB: string
  IS_ACTIVE: boolean
  ORDER: number
  LABEL: LocaleFlags[]
}

export type ChannelFlags = {
  COLORS: ColorFlags
  HOME_ITEMS: {
    DISPLAY_ALL_CATEGORIES: boolean
    CAROUSELS: CarouselFlags[]
  }
  IMAGES?: ChannelImageFlags
  LIVESTREAM: LiveCarouselFlags[]
  PLAYER: {
    SKIN: string
  }
  SETTINGS: {
    DISPLAY_CHANNEL_LOGO: boolean
    DISPLAY_COMMENTS: boolean
    DISPLAY_POST_THUMB_COUNT_VIEWS: boolean
    DISPLAY_POST_THUMB_TITLE: boolean
    DISPLAY_REACTIONS: boolean
  }
  THEME: string
}

export interface FlagTypes {
  ORGANIZATION: OrganizationFlags
  CHANNELS: Record<string, ChannelFlags>
}
