import styled from 'styled-components'
import { breakpoints } from 'styles'
import { StyledProps } from './types'

import { Text as TextComponent } from 'components/atoms'

export const HeaderMain = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cardBg[theme.colorMode]};
  padding: 0.8em 1em;

  @media screen and (min-width: ${breakpoints.lg}) {
    padding: 0.4em 1em;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    padding: 0.6em 1em;
  }
  @media screen and (max-width: ${breakpoints.sm}) {
    height: 45px;
    margin-top: 1px;
  }
`

export const Text = styled(TextComponent)<StyledProps>`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bolder;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.generalText[theme.colorMode]};

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 1rem;
  }
`
