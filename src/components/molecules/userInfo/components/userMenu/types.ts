import { ColorMode } from 'types/common'

interface AccountData {
  username?: string | null
  display_name?: string | null
}

export interface PropsUserMenu {
  account?: AccountData | undefined
  colorMode: ColorMode
  avatar_url?: string | null
}
