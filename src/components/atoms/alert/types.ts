import {
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  PositionProps,
} from 'styled-system'

import { AlertType } from 'types/common'

export interface Props
  extends SpaceProps,
    LayoutProps,
    FlexboxProps,
    PositionProps {
  description: string
  type?: AlertType
  closeable?: boolean
  onClose?: () => void
}

export const defaultProps = {
  type: 'warning',
  closeable: true,
}
