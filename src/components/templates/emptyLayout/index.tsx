import { InternalFooter } from 'components'
import { EmptyHeader } from 'components/molecules'
import { ChildContainer, LayoutContainer } from './style'
import { Props, defaultProps } from './types'

const EmptyLayout = ({ children, ...props }: Props) => (
  <LayoutContainer flexDirection="column">
      <EmptyHeader></EmptyHeader>
    <ChildContainer pb={30} justifyContent={'center'} {...props}>
      {children}
    </ChildContainer>
    <InternalFooter />
  </LayoutContainer>
)

EmptyLayout.defaultProps = defaultProps

export { EmptyLayout }
