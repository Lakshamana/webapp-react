import { ExternalFooter, ExternalHeader } from 'components'
import { ChildContainer, LayoutContainer } from './style'
import { Props, defaultProps } from './types'
import { useFlags } from 'config/firebase/FlagsProvider'

const LoginLayout = ({
  children,
  rightContent,
  rightContentStyle = {},
  mode,
  ...props
}: Props) => {
  const { ORGANIZATION } = useFlags()
  return (
    <LayoutContainer flexDirection="column">
      <ExternalHeader {...{ mode, rightContent, rightContentStyle }} />
      <ChildContainer
        justifyContent={'center'}
        width={1}
        backgroundImage={ORGANIZATION.LOGIN_IMAGE}
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
