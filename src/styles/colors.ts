import { ColorFlags } from 'types/flags'
import { toLowerKeys } from 'utils/helperFunctions'

const defaultColors: any = {
  brand: {
    primary: {
      light: '',
      dark: '',
    },
    secondary: {
      light: '',
      dark: '',
    },
    action_link: {
      light: '',
      dark: '',
    },
    indicator: {
      light: '',
      dark: '',
    },
    live_badges: {
      finished: '',
      live: '',
      upcoming: ''
    },
    progress: {
      light: '',
      dark: ''
    }
  },
  generalText: {
    light: '#000000',
    dark: '#ffffff',
  },
  secondaryText: {
    light: '#444444',
    dark: '#A4A4A4',
  },
  bodyBg: {
    light: '#ffffff',
    dark: '#0F0F0F',
  },
  cardBg: {
    light: '#F6F6F6',
    dark: '#222222',
  },
  headerBg: {
    light: '#FAFAFA',
    dark: '#000000',
  },
  footerBg: {
    light: '#FAFAFA',
    dark: '#000000',
  },
  inputBg: {
    light: '#E2E9E9',
    dark: '#444444',
  },
  selectBg: {
    light: '#FFFFFF',
    dark: '#444444',
  },
  selectText: {
    light: '#00000',
    dark: '#ffffff',
  },
  inputText: {
    light: '#666666',
    dark: '#F2FFF8',
  },
  livechatText: {
    light: '#000000',
    dark: '#e1e1e1',
  },
  livechatBg: {
    light: '#E2E9E9',
    dark: '#ffffff',
    me: '#0660F9',
  },
  billboardText: {
    light: '#444444',
    dark: '#ffffff',
  },
  headerUserPopoverBg: {
    light: '#E2E9E9',
    dark: '#20242A',
  },
  comments: {
    light: '#444444',
    dark: '#666666',
  },
  alerts: {
    success: {
      default: '#33DA80',
      bg: '#F2FFF8',
    },
    error: {
      default: '#FF0000',
      bg: '#FFF2F2',
    },
    warning: {
      default: '#FFD601',
      bg: '#FFFBD8',
    },
    info: {
      default: '#0987d4',
      bg: '#e2f8fe',
    },
  },
  skeleton: {
    initial: {
      light: '#d8d3d3',
      dark: '#212020',
    },
    end: {
      light: '#F1EEEE',
      dark: '#2F2D2D',
    },
  },
  search: {
    result: {
      light: '#FFFFFF',
      dark: '#222222',
    },
    section: {
      light: '#E2E9E9',
      dark: '#000000',
    },
  },
  channel: {
    background: {
      light: '#FAFAFA',
      dark: '#20242A',
    },
    searchIcon: {
      light: '#20242A',
      dark: '#FFFFFF',
    },
    itemText: {
      light: '#20242A',
      dark: '#FFFFFF',
    },
    checkIcon: {
      light: '#000000',
      dark: '#FFFFFF',
    },
  },
  reaction: {
    background: {
      light: '#d8d3d3',
      dark: '#313030',
    },
    color: {
      light: '#747474',
      dark: '#747474',
    },
    hover: {
      background: '#0469FF',
      color: 'white',
    },
    selected: {
      light: '#0469FF',
      dark: '#0469FF',
    },
  },
  white: '#FFFFFF',
  black: '#000000',
  background: '#313740',
  textLight: '#EBE9E1',
  textMedium: '#9E9F9D',
  textDark: '#20242A',
  grey: {
    '100': '#FAFAFA',
    '200': '#E2E9E9',
    '300': '#C4D3D4',
    '400': '#90AAAD',
    '500': '#6C9093',
    '600': '#577375',
    '650': '#A4A4A4',
    '700': '#666666',
    '800': '#444444',
    '850': '#333333',
    '900': '#2B2B2B',
    '1000': '#222222',
  },
  blue: {
    '300': '#0660F9',
  },
  green: {
    '100': '#D9F2D9',
    '400': '#70C270',
    '700': '#2E6B2E',
  },
  purple: {
    '100': '#4C26F0',
    '200': '#9B84FE',
  },
  red: {
    '100': '#FEF1F2',
    '600': '#C53911',
    '700': '#EA1D2C',
  },
  yellow: {
    '200': '#FFF0C2',
    '700': '#7A631F',
  },
  danger: '#EA1D2C',
  success: '#70C270',
  transparent: {
    '100': 'transparent',
    '200': 'rgba(0, 0, 0, 0.3)',
    '300': 'rgba(0, 0, 0, 0.08)',
    '400': 'rgba(0, 0, 0, 0.02)',
    '500': 'rgba(0, 0, 0, 0.5)',
    '600': 'rgba(0, 0, 0, 0.75)',
  },
  whiteTransparent: {
    '100': 'rgba(255, 255, 255, 0.1)',
    '200': 'rgba(255, 255, 255, 0.3)',
    '300': 'rgba(255, 255, 255, 0.5)',
    '400': 'rgba(255, 255, 255, 0.7)',
  },
  primaryTransparent: 'rgba(27, 18, 255, 0.85)',
  bgOverlay: 'rgba(45, 43, 89, 0.2)',
}

export function setColor(BRAND_COLORS: ColorFlags) {
  defaultColors.brand = toLowerKeys(BRAND_COLORS)
  defaultColors.brand.primary = toLowerKeys(defaultColors.brand.primary)
  defaultColors.brand.secondary = toLowerKeys(defaultColors.brand.secondary)
  defaultColors.brand.action_link = toLowerKeys(defaultColors.brand.action_link)
  defaultColors.brand.indicator = toLowerKeys(defaultColors.brand.indicator)
  defaultColors.brand.live_badges = toLowerKeys(defaultColors.brand.live_badges)
  defaultColors.brand.progress = toLowerKeys(defaultColors.brand.progress)
}

export const colors = defaultColors
