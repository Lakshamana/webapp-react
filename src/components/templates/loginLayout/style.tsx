import styled from 'styled-components'
import { Props } from './types'
import { StyleContainer } from 'components'

export const ChildContainer = styled(StyleContainer)<Props>`
  flex: 1;
  align-items: center;
  background: ${(props: Props) => `url('${props.backgroundImage}')`};
  background-size: cover;
  background-position: center top;
  background-attachment: fixed;
`

export const LayoutContainer = styled(StyleContainer)`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
`
