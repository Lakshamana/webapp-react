import styled from 'styled-components'
import { flexbox, grid, layout, space } from 'styled-system'
import { StyledProps } from './types'

import { Icon } from '@iconify/react'

export const LivechatFooterMain = styled.div<StyledProps>`
  ${layout}
  width: 100%;
  border-top: 2px solid ${({ theme }) => theme.colors.bodyBg[theme.colorMode]};
  display: flex;
  position: relative;
  gap: 0.7em;
  flex-direction: row;
  align-items: center;
  padding: 0.5em 1em;
  background: ${({ theme }) => theme.colors.footerBg[theme.colorMode]};
`

export const IconContainer = styled.div<StyledProps>`
  display: flex;
  ${flexbox}
  position: relative;
`

export const IconItem = styled.div<StyledProps>``

export const InputContainer = styled.div<StyledProps>`
  ${flexbox}
`

export const AnimatedIcon = styled(Icon)`
  z-index: 1;
`

export const PopoverIcon = styled.div<StyledProps>`
  ${flexbox}
  ${grid}
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: ${({ theme }) => theme.colors.cardBg[theme.colorMode]};
  border-radius: 8px;
  overflow: hidden;
`

export const Reaction = styled.div<StyledProps>`
  ${space}
  ${layout}
  padding: 0.3em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.colors.inputBg[theme.colorMode]};
  }
`
