import styled from "styled-components";
import { space, layout, SpaceProps, LayoutProps } from "styled-system";

export const UserContainer = styled.div<SpaceProps>`
  ${space}
  display: flex;
  align-items: center;
  border-left: 1px solid #666666;
  user-select: none;
  cursor: pointer;
`;

export const CircleImage = styled.img<LayoutProps>`
  ${layout}
  border-radius: 50%;
`;
