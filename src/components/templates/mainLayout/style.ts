import { StyleContainer } from 'components'
import styled from 'styled-components'

export const ChildContainer = styled(StyleContainer)`
  flex: 1;
`

export const LayoutContainer = styled(StyleContainer)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bodyBg[theme.colorMode]};
`

export const LayoutMain = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`
