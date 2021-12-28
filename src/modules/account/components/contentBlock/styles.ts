import styled from 'styled-components'
import { breakpoints } from 'styles'

import {
  flexbox,
  layout,
  space,
  LayoutProps,
  SpaceProps,
  FlexboxProps,
} from 'styled-system'

interface ContentContainerProps extends LayoutProps, SpaceProps, FlexboxProps {}

export const ContentContainer = styled.div<ContentContainerProps>`
  ${layout}
  ${flexbox}
  ${space}
  @media screen and (min-width: ${breakpoints.xl}) {
    width: 32%;
  }
`
