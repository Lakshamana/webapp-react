import {
  FlexboxProps, LayoutProps, PositionProps, SpaceProps, VariantArgs
} from 'styled-system'
  
  type AlertType = 'error' | 'success'
  
  export interface Props
    extends SpaceProps,
      LayoutProps,
      FlexboxProps,
      VariantArgs,
      PositionProps {
    title: string
    description: string
    type: AlertType
    actionLabel?: string
    toRoute?: string
    toExternalLink?: string
    actionVariant?: 'ghost' | 'link',
    actionClick?: () => void
    callToAction?: () => void
  }
  
  export const defaultProps = {
    type: 'warning',
    closeable: true,
  }
  