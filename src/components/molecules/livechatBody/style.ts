import styled from 'styled-components'
import { StyledProps } from './types'

export const MainChatBody = styled.div<StyledProps>`
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
