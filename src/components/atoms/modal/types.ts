import {
  SpaceProps,
  FlexProps,
  DisplayProps,
  TypographyProps,
} from 'styled-system'

export interface Props
  extends SpaceProps,
    FlexProps,
    DisplayProps,
    TypographyProps {
  children?: JSX.Element | JSX.Element[]
  isOpen: boolean
  onClose: () => void
  onConfirm?: () => void
  isCentered?: boolean
  title?: string
  subtitle?: string
  actionLabel?: string
  cancelLabel?: string
  closeButton?: boolean
  actionButton?: boolean
  cancelButton?: boolean
  loading?: boolean
}

export const defaultProps = { 
  actionButton: true,
  cancelButton: true,
  closeButton: true,
  loading: false
} 
