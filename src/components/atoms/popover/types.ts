import { PopoverProps } from '@chakra-ui/react'

export interface Props extends PopoverProps {
  display?: 'menu' | 'sidebar'
  children: JSX.Element
  popoverTrigger: JSX.Element
  background?: string
  hasArrow?: boolean
  width?: string
}
