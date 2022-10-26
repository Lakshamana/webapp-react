import { ExternalFooter, ExternalHeader } from 'components'
import { ThumborInstanceTypes, useThumbor } from 'hooks/useThumbor'
import { useCustomizationStore } from 'services/stores'
import { ChildContainer, LayoutContainer } from './style'
import { defaultProps, Props } from './types'

const LoginLayout = ({
  children,
  rightContent,
  rightContentStyle = {},
  mode,
  ...props
}: Props) => {
  const { organizationConfig } = useCustomizationStore()
  const { generateImage } = useThumbor()
  const options = {
    size: {
      height: 800,
    },
  }
  const bgLogin = () => {
    if (!organizationConfig?.IMAGES?.LOGIN_BACKGROUND) return ''
    return generateImage(
      ThumborInstanceTypes.IMAGE,
      organizationConfig?.IMAGES?.LOGIN_BACKGROUND,
      options
    )
  }
  return (
    <LayoutContainer flexDirection="column">
      <ExternalHeader {...{ mode, rightContent, rightContentStyle }} />
      <ChildContainer
        justifyContent={'center'}
        width={1}
        backgroundImage={bgLogin()}
        {...{ ...props }}
      >
        {children}
      </ChildContainer>
      <ExternalFooter />
    </LayoutContainer>
  )
}

LoginLayout.defaultProps = defaultProps

export { LoginLayout }
