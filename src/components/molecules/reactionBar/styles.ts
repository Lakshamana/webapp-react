import styled from "styled-components";
import { space, layout, SpaceProps, LayoutProps } from "styled-system";

interface SpaceLayoutProps extends SpaceProps, LayoutProps {}

export const Reaction = styled.div<SpaceLayoutProps>`
  ${space}
  ${layout}
  height: 32px;
  display: flex;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.reaction.background[theme.colorMode]};
  color: ${({ theme }) => theme.colors.reaction.color[theme.colorMode]};
  cursor: pointer;
  align-items: center;
  padding: 0.3em;
  :hover {
    background: ${({ theme }) => theme.colors.reaction.hover.background};
    color: ${({ theme }) => theme.colors.reaction.hover.color};
  }
`;

export const EmoticonReaction = styled.div<SpaceLayoutProps>`
  ${space}
  ${layout}
  height: 32px;
  display: flex;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
  padding: 0.3em;
  :hover {
    background: ${({ theme }) => theme.colors.reaction.hover.background};
  }
`;
