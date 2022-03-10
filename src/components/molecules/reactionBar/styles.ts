import styled from 'styled-components'
import { space, layout, SpaceProps, LayoutProps } from 'styled-system'

interface SpaceLayoutProps extends SpaceProps, LayoutProps {}

export const Reaction = styled.div<SpaceLayoutProps>`
  ${space}
  ${layout}
  height: 35px;
  display: flex;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.cardBg[theme.colorMode]};
  color: ${({ theme }) => theme.colors.generalText[theme.colorMode]};
  cursor: pointer;
  align-items: center;
  padding: 0 0.6em;
  font-size 1rem;
`

export const EmoticonReaction = styled.div<SpaceLayoutProps>`
  ${space}
  ${layout}
  height: 42px;
  display: flex;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  font-size: 1.6rem;
  padding: 0.3em;
  :hover {
    background: ${({ theme }) => theme.colors.reaction.hover.background};
  }
`
