import { useEffect } from 'react'
import { Header, InternalFooter } from 'components'
import { ChildContainer, LayoutContainer } from './style'
import { Props, defaultProps } from './types'
import { initializeOneSignal } from 'utils/pushNotifications'

const MainLayout = ({ children, ...props }: Props) => {
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
    </LayoutContainer>
  )
}

MainLayout.defaultProps = defaultProps

export { MainLayout }
