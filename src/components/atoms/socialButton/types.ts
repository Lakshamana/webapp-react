import { ButtonProps } from '@chakra-ui/button'

export interface SocialSigninButtonProps extends ButtonProps {
  kind: ButtonType
}

type ButtonType = 'facebook' | 'google' | 'apple' | 'linkedin'
