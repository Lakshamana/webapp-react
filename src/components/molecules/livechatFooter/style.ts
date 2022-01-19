import styled from 'styled-components'
import { space, layout, flexbox, grid } from 'styled-system'
import { StyledProps } from './types'

import { Icon } from '@iconify/react'

export const LivechatFooterMain = styled.div<StyledProps>`
  ${layout}
  width: 100%;
  border-top-width: 1px;
  border-top-color: #444444;
  border-top-style: solid;
  display: flex;
  gap: 1em;
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
  //Implements animation emote here
`

export const PopoverIcon = styled.div<StyledProps>`
  ${flexbox}
  ${grid}
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  position: absolute;
  background: ${({ theme }) => theme.colors.footerBg[theme.colorMode]};
  z-index: 99;
  bottom: 60px;
  left: 0px;
  -webkit-box-shadow: 3px 6px 17px 1px #000000;
  box-shadow: 3px 6px 17px 1px #000000;
  border-radius: 4px;
`

export const Reaction = styled.div<StyledProps>`
  ${space}
  ${layout}
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  align-items: center;
  border-radius: 4px;
  :hover {
    background: ${({ theme }) => theme.colors.inputBg[theme.colorMode]};
  }
`
