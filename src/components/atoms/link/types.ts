import { LinkProps } from '@chakra-ui/react'
import { FontSizeProps, FontStyleProps } from 'styled-system'

export interface Props extends LinkProps {
  label?: string
  to: string
  defaultColor?: boolean
  children?: any
}

export interface StyleProps extends FontSizeProps, FontStyleProps {}