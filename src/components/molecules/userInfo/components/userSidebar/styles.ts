import styled from 'styled-components'
import { StyleContainer } from 'components'
import { breakpoints } from 'styles'

export const UserContainer = styled(StyleContainer)`
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
  background-color: ${({ theme }) => theme.colors.bodyBg[theme.colorMode]};
  color: ${({ theme }) => theme.colors.generalText[theme.colorMode]};

  @media screen and (min-width: ${breakpoints.lg}) {
    display: none;
  }
`
