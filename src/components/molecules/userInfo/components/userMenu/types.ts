interface AccountData {
  username?: string | null
  display_name?: string | null
}

export interface PropsUserMenu {
  account?: AccountData | undefined
  colorMode: 'light' | 'dark'
  avatar_url?: string | null
}
