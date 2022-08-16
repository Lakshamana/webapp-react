import { ActionNotAllowed, Header, InternalFooter } from 'components'
import { useAccessVerifications } from 'contexts/accessVerifications'
import { useEffect } from 'react'
import { initializeOneSignal } from 'utils/pushNotifications'
import { ChildContainer, LayoutContainer } from './style'
import { defaultProps, Props } from './types'

const MainLayout = ({ children, ...props }: Props) => {
  const { isActionNotAllowedOpen, closeActionNotAllowed } = useAccessVerifications()

  useEffect(() => {
    initializeOneSignal()
  }, [])
  return (
    <LayoutContainer flexDirection="column">
      <Header />
      <ChildContainer pb={30} justifyContent={'center'} {...props}>
        {children}
      </ChildContainer>
      <InternalFooter />
      <ActionNotAllowed isOpen={isActionNotAllowedOpen} onClose={closeActionNotAllowed} />
    </LayoutContainer>
  )
}

MainLayout.defaultProps = defaultProps

export { MainLayout }
