import { TypographyProps, SpaceProps } from 'styled-system'

export interface Props extends TypographyProps, SpaceProps {
  children: any
  kind?: string
}

export const defaultProps = {
  kind: 'default',
}
