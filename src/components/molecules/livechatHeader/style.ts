import styled from 'styled-components'
import { space, layout, flexbox } from 'styled-system'
import { breakpoints } from 'styles'
import { StyledProps } from './types'

import { Text as TextComponent } from 'components/atoms'

interface CustomPropsStyle extends StyledProps {
  colorMode?: string
}

export const HeaderMain = styled.div<CustomPropsStyle>`
  ${layout}
  ${space}
  ${flexbox}
  align-items: center;
  background-color: ${({ colorMode, theme })=> colorMode === 'light' 
    ? theme.colors.inputBg[theme.colorMode]
    : theme.colors.cardBg[theme.colorMode]
  };

  padding: 0.8em 0;
  @media screen and (min-width: ${breakpoints.lg}) {
    padding: 0.4em 0
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    padding: 0.6em 0
  }
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
