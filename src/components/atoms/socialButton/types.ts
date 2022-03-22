import { ButtonProps } from '@chakra-ui/button'

export interface SocialSigninButtonProps extends ButtonProps {
  kind: ButtonType,
  colorful?: boolean
}

type ButtonType = 'facebook' | 'google' | 'apple' | 'linkedin' | 'twitter'
