import {
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  PositionProps,
} from 'styled-system'

export interface Props
  extends SpaceProps,
    LayoutProps,
    FlexboxProps,
    PositionProps {
  children?: JSX.Element | JSX.Element[]
  backgroundColor?: string
  removeShadow?: boolean
  roundBorder?: number
}

export const defaultProps = {
  paddingY: 32,
  paddingX: 48,
  roundBorder: 8,
}
