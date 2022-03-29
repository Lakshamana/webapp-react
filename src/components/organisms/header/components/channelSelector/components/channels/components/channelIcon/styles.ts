import styled from 'styled-components'
import { space, SpaceProps, LayoutProps } from 'styled-system'
import { colors } from 'styles'

interface TypeSpaceProps extends SpaceProps, LayoutProps {}

export const Item = styled.li<TypeSpaceProps>`
  ${space}
  cursor: pointer;
  user-select: none;
  :hover {
    background: ${colors.blue['300']};
  }
`
