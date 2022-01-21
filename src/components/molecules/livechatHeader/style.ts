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
  height: 48px;
  align-items: center;
  background-color: ${({ colorMode, theme })=> colorMode === 'light' 
    ? theme.colors.inputBg[theme.colorMode]
    : theme.colors.cardBg[theme.colorMode]
  };
  padding: 0.8em 1em;
  @media screen and (min-width: ${breakpoints.lg}) {
    padding: 0.4em 1em;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    padding: 0.6em 1em;
  }
  border-bottom-width: 1px;
  border-bottom-color: #444444;
  border-bottom-style: solid;
`

export const Text = styled(TextComponent)<StyledProps>`
  text-transform: uppercase;
`