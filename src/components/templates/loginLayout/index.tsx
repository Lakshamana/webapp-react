import { ExternalFooter, ExternalHeader } from 'components'
import { ChildContainer, LayoutContainer } from './style'
import { Props, defaultProps } from './types'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks/useThumbor'
import { useOrganizationStore } from 'services/stores'

const LoginLayout = ({
  children,
  rightContent,
  rightContentStyle = {},
  mode,
  ...props
}: Props) => {
  const { organization } = useOrganizationStore()
  const { generateImage } = useThumbor()
  const bg_login = generateImage(
    ThumborInstanceTypes.IMAGE,
    organization?.customization.login_image
  )
  return (
    <LayoutContainer flexDirection="column">
      <ExternalHeader {...{ mode, rightContent, rightContentStyle }} />
      <ChildContainer
        justifyContent={'center'}
        width={1}
        backgroundImage={bg_login}
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
