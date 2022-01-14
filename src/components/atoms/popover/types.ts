import { PopoverProps } from '@chakra-ui/react'

export interface Props extends PopoverProps {
  children: JSX.Element
  popoverTrigger: JSX.Element
  background?: string
  hasArrow?: boolean
}
