export interface Props {
  date: string;
  username: string;
  message: string;
  isOwnUser?: boolean;
  avatarUrl?: string;
}

export const defaultProps = {
  isOwnUser: false,
  username: "",
  message: "",
  date: "",
}

export interface Theme {
  isOwnUser?: boolean
  theme: ThemeDefinition
}

interface ThemeDefinition {
  colors: ColorsDefinition,
  colorMode: string
}

interface ColorsDefinition {
  livechatText: string
  livechatBg: string
}
