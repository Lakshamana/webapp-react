import {
    LayoutProps,
    SpaceProps,
    FlexboxProps,
    PositionProps,
    VariantArgs
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
    actionClick?: () => void
  }
  
  export const defaultProps = {
    type: 'warning',
    closeable: true,
  }
  