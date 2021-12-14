import { ButtonProps } from '@chakra-ui/react'


export interface Props extends ButtonProps {
  label?: string
  children?: JSX.Element | JSX.Element[]
  iconName?: string
}
