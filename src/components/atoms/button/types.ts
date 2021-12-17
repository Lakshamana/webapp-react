import { ButtonProps } from '@chakra-ui/react'


export interface Props extends ButtonProps {
  label?: string
  children?: JSX.Element | JSX.Element[]
  iconName?: string
}

export const defaultProps = {
  variant: 'solid',
  borderRadius: '6px',
  color: 'white',
  fontSize: '16px',
  width: '100%'
}
