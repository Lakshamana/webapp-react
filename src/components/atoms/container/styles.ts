import styled from 'styled-components'
import {
  space,
  flexbox,
  layout,
  color,
  position,
  typography,
  grid,
} from 'styled-system'

import { breakpoints } from 'styles'

import { Props } from './types'

export const StyleContainer = styled.div<Props>`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${position}
  ${typography}
  ${grid}
  
  .defaultPadding {
    padding: 0 ${({ theme }) => theme.sizes.paddingSm};

    @media screen and (min-width: ${breakpoints.md}) {
      padding: 0 ${({ theme }) => theme.sizes.paddingMd};
      height: ${({ theme }) => theme.sizes.footerDesktopHeight};
    }

    @media screen and (min-width: ${breakpoints.lg}) {
      padding: 0 ${({ theme }) => theme.sizes.paddingLg};
    }
  }
`
