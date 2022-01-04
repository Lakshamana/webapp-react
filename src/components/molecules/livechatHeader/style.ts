import styled from 'styled-components'
import { space, layout, flexbox } from 'styled-system'
import { StyledProps } from './types'

import { Text as TextComponent } from 'components/atoms'

interface CustomPropsStyle extends StyledProps {
  colorMode?: string
}

export const HeaderMain = styled.div<CustomPropsStyle>`
  ${layout}
  ${space}
  ${flexbox}
  padding: 1em 0;
  align-items: center;
  background-color: ${({ colorMode, theme })=>{
    if(colorMode === 'light') {
      return theme.colors.inputBg[theme.colorMode];
    }
    return theme.colors.inputBg[theme.colorMode];
  }};
`

export const AvatarContainer = styled.div<StyledProps>`
  ${layout}
  ${flexbox}
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextContainer = styled.div<StyledProps>`
  ${layout}
  ${flexbox}
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Text = styled(TextComponent)<StyledProps>`
  text-transform: uppercase;
`

export const DotsContainer = styled.div<StyledProps>`
  ${flexbox}
`
