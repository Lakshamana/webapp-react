import styled from 'styled-components'
import { space, SpaceProps, LayoutProps } from 'styled-system'
import { colors } from 'styles'

interface TypeSpaceProps extends SpaceProps, LayoutProps {}

export const ChannelList = styled.ul`
  width: 100%;
  li:last-child {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`

export const ChannelItem = styled.li<TypeSpaceProps>`
  ${space}
  cursor: pointer;
  user-select: none;
  :hover {
    background: ${colors.blue['300']};
  }
`
