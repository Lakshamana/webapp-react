import { Props, defaultProps } from './types'

import { StyleContainer } from './styles'

const Container = (props: Props) => (
  <StyleContainer
    className={props.defaultPadding ? 'defaultPadding' : ''}
    {...props}
  >
    {props.children}
  </StyleContainer>
)

Container.defaultProps = defaultProps

export { Container, StyleContainer }
