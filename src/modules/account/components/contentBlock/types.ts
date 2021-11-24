import { SpaceProps } from 'styled-system'

export interface ContentBlockProps extends SpaceProps {
  title: string
  children: any
  action?: any
  colorMode: 'light' | 'dark'
}
