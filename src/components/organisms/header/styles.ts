import styled from 'styled-components'
import { StyleContainer } from 'components'
import { breakpoints } from 'styles'

export const HeaderContainer = styled(StyleContainer)`
  display: flex;
  background: ${({ theme }) => theme.colors.headerBg[theme.colorMode]};
  padding: 0 ${({ theme }) => theme.sizes.paddingSm};

  @media screen and (min-width: ${breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.sizes.paddingMd};
  }

  @media screen and (min-width: ${breakpoints.lg}) {
    padding: 0 ${({ theme }) => theme.sizes.paddingLg};
  }

  ${({ theme }) =>
    theme.colorMode === 'light' &&
    `border-bottom: 1px solid ${theme.colors.grey[200]}`}
`

export const LogoContainer = styled.div`
  padding: 0 ${({ theme }) => theme.sizes.paddingSm};

  @media screen and (min-width: ${breakpoints.xl}) {
    padding: 0 ${({ theme }) => theme.sizes.paddingLg};
  }
`
