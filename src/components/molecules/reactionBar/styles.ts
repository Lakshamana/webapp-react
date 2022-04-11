import styled from 'styled-components'
import { space, layout, SpaceProps, LayoutProps } from 'styled-system'
import { ReactionProps } from './types'

interface SpaceLayoutProps extends SpaceProps, LayoutProps, ReactionProps { }

export const Reaction: any = styled.div<SpaceLayoutProps>`
  ${space}
  ${layout}
  height: 35px;
  display: flex;
  border-radius: 3px;
  background:  ${({ theme, myReaction }) => {
    return myReaction
      ? theme.colors.reaction.selected[theme.colorMode]
      : theme.colors.reaction.background[theme.colorMode]
  }};
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
  width: 98%;
  display: flex;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  padding: 0.3em;
  margin-bottom: 0.5px;
  background:  ${({ theme, myReaction }) => {
    return myReaction &&
      theme.colors.reaction.selected[theme.colorMode]
  }};
  :hover {
    background: ${({ theme }) => theme.colors.reaction.hover.background};
  }
`
