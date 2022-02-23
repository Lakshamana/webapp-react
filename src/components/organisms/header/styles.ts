import styled from 'styled-components'
import { StyleContainer } from 'components'
import { breakpoints } from 'styles'

export const HeaderContainer = styled(StyleContainer)`
  display: flex;
  background: ${({ theme }) => theme.colors.headerBg[theme.colorMode]};
  padding: 0 ${({ theme }) => theme.sizes.paddingSm};
  box-shadow: 1px 0px 1px rgb(0 0 0 / 38%);

  @media screen and (min-width: ${breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.sizes.paddingMd};
  }
`
export const ChannelContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 273px;
`
