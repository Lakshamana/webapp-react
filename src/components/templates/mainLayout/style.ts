import styled from 'styled-components'
import { StyleContainer } from 'components'

export const ChildContainer = styled(StyleContainer)`
  flex: 1;
`

export const LayoutContainer = styled(StyleContainer)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bodyBg[theme.colorMode]};
  overflow-x: hidden;
  min-height: 100vh;
`
