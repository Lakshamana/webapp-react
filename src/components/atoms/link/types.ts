import { LinkProps } from '@chakra-ui/react'

export interface Props extends LinkProps {
  label: string
  to: string
  defaultColor?: boolean
}
