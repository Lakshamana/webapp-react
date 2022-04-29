import { ExternalFooter, ExternalHeader } from 'components'
import { ChildContainer, LayoutContainer } from './style'
import { Props, defaultProps } from './types'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks/useThumbor'
import { useCustomizationStore } from 'services/stores'

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
