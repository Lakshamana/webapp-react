import { SpaceProps } from 'styled-system'
import { ColorMode } from 'types/common'

export interface ContentBlockProps extends SpaceProps {
  title: string
  children: any
  action?: any
  colorMode: ColorMode
}
