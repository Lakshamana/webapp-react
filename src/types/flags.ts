export type OrganizationFlags = {
  APP_BRAND?: string
  COLORS?: ColorFlags
  DFP_ACTIVE?: boolean
  DISPLAY_SIGNUP_BUTTON?: boolean
  FACEBOOK_PIXEL_CODE?: string
  GDPR_URL?: string
  HEADER?: {
    TABS: TabFlags[]
  }
  IMAGES?: ImagesFlags
  LOCALE?: string
  TERMS_URL?: string
  PRIVACY_URL?: string
  THEME?: string
}

export type TabFlags = {
  TAB: string
  ACTIVE: boolean
  ORDER: number
  LABEL: LocaleFlags[]
  URL: string
}

export type ImagesFlags = {
  ICON: string
  LOGO: string
  LOGIN_BACKGROUND: string
  FAVICON_16: string
  FAVICON_32: string
  FAVICON_64: string
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
  ACCENT: {
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
  IMAGES?: ChannelImageFlags
  COLORS: ColorFlags
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
