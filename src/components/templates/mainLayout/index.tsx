import { Header, InternalFooter } from 'components'
import { ChildContainer, LayoutContainer } from './style'
import { Props, defaultProps } from './types'

const MainLayout = ({ children, ...props }: Props) => {
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
