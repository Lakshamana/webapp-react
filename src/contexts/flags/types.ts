export type OrganizationFlags = {
  TERMS_URL: string
  PRIVACY_URL: string
  GDPR_URL: string
  LOCALE?: string
  LOGIN_IMAGE: string
  LOGO_IMAGE: string
  HOME_CHANNEL_ID: string
  THEME?: string
  DISPLAY_SIGNUP_BUTTON?: boolean
  FACEBOOK_PIXEL_CODE?: string
  APP_BRAND?: string
  DFP_ACTIVE: boolean
}
export type TabFlags = {
  TAB: string
  ACTIVE: boolean
  ORDER: number
  LABEL: LocaleFlags[]
}

export type CarouselFlags = {
  ACTIVE: boolean
  ORDER: number
  LABEL: LocaleFlags[]
  TYPE: string
}

export type LocaleFlags = {
  LOCALE: string
  VALUE: string
}

export type ColorFlags = {
  PRIMARY: {
    LIGHT: string
    DARK: string
  }
  SECONDARY: {
    LIGHT: string
    DARK: string
  }
  ACTION_LINK: {
    LIGHT: string
    DARK: string
  }
  INDICATOR: {
    LIGHT: string
    DARK: string
  }
}

export type ChannelFlags = {
  HEADER: {
    TABS: TabFlags[]
  }
  HOME_ITEMS: {
    DISPLAY_ALL_CATEGORIES: boolean
    CAROUSELS: CarouselFlags[]
  }
  COLORS: {}
  THEME: string
  DISPLAY_SEARCH: boolean
  DISPLAY_CHANNEL_LOGO: boolean
  DISPLAY_POST_THUMB_COUNT_VIEWS: boolean
  DISPLAY_POST_THUMB_TITLE: boolean
  DISPLAY_COMMENTS: boolean
  DISPLAY_REACTIONS: boolean
  DISPLAY_LIVESTREAM_USERS_COUNT: boolean
}

export interface FlagTypes {
  ORGANIZATION: OrganizationFlags
  CHANNELS: Record<string, ChannelFlags>
}

export const defaultProps = {
  ORGANIZATION: {
    TERMS_URL: '',
    PRIVACY_URL: '',
    GDPR_URL: '',
    LOCALE: 'pt',
    LOGIN_IMAGE: '',
    LOGO_IMAGE: '',
    HOME_CHANNEL_ID: '',
    THEME: '',
    DISPLAY_SIGNUP_BUTTON: true,
    FACEBOOK_PIXEL_CODE: '',
    APP_BRAND: 'fanhero',
    DFP_ACTIVE: false,
  },
  CHANNELS: {},
}
