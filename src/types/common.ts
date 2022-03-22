export type AlertType = 'warning' | 'error' | 'success' | 'info'

export type AlertObjectType = {
  message: string
  type: AlertType
}

export type SocialType = 'facebook' | 'google' | 'twitter'

export type EntityType = 'public' | 'exclusive' | 'private' | 'geolocked'

export type ColorMode = "dark" | "light";
