import styled from 'styled-components'
import { layout } from 'styled-system'
import { StyledProps } from './types'

export const MainChatBody = styled.div<StyledProps>`
  ${layout}
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1em;
  gap: 1em;
  overflow-y: scroll;
  scroll-snap-align: end;
  background: ${({ theme }) => theme.colors.bodyBg[theme.colorMode]};
`
