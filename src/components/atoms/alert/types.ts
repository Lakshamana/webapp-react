import {
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  PositionProps,
} from 'styled-system'

type AlertType = 'warning' | 'error' | 'success' | 'info'

export interface Props
  extends SpaceProps,
    LayoutProps,
    FlexboxProps,
    PositionProps {
  description: string
  type?: AlertType
  closeable?: boolean
  onClose: () => void
}

export const defaultProps = {
  type: 'warning',
  closeable: true,
}
