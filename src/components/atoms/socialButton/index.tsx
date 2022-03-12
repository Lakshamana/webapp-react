import { SocialSigninButtonProps } from './types'
import { Icon } from '@iconify/react'
import { useThemeStore } from 'services/stores/theme'
import { BoxButton } from './styles'
import { colors } from 'styles'
import { ReactComponent as AppleIcon } from 'assets/companies/apple.svg'
import { ReactComponent as FacebookIcon } from 'assets/companies/facebook.svg'
import { ReactComponent as GoogleIcon } from 'assets/companies/google.svg'

const SocialSigninButton = ({
  kind,
  colorful = false,
  ...props
}: SocialSigninButtonProps) => {
  const { colorMode } = useThemeStore()
  const icons = {
    facebook: 'fa-brands:facebook-square',
    apple: 'fa-brands:apple',
    google: 'fa-brands:google',
  }
  const iconsCustom: any = {
    facebook: <FacebookIcon width={24} />,
    apple: <AppleIcon width={24} />,
    google: <GoogleIcon width={24} />,
  }
  return (
    <>
      {colorful ? (
        <BoxButton {...props}>{iconsCustom[kind]}</BoxButton>
      ) : (
        <BoxButton {...props}>
          <Icon
            width={28}
            color={colors.generalText[colorMode]}
            icon={icons[kind]}
          />
        </BoxButton>
      )}
    </>
  )
}

export { SocialSigninButton }
