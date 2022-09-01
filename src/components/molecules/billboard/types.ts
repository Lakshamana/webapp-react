import { Props as ButtonProps } from 'components/atoms/button/types'

export interface BillboardItem {
  id: string
  banner: string
  cover: string
  image?: string
  isPinned?: boolean
  delay?: number
  title: string
  description: string
  infoColor?: string
  actions?: Array<BillboardItemActions>
  live?: boolean
  slug?: string
}

export interface BillboardItemActions extends ButtonProps {
  action?: (e: Event) => void
  bgColor: string
  borderColor?: string
  icon?: string
  label: string
  route?: BillboardRouteType
  textColor?: string
}

export interface BillboardRouteType {
  content: string
  contentWeb: string
}

export interface Props {
  items?: Array<BillboardItem>
  customButtons: boolean
  reachEnd: () => void
}
