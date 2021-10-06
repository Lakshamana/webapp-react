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

export const OptionsList = styled.ul`
  ${layout}
  width: 100%;
  li:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;
