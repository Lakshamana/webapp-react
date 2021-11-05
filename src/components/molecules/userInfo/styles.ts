import styled from "styled-components";
import { space, layout, SpaceProps, LayoutProps } from "styled-system";
import { colors } from "styles";

interface UserContainerProps extends SpaceProps {
  delimited: boolean;
}

export const UserContainer = styled.div<UserContainerProps>`
  ${space}
  display: flex;
  align-items: center;
  border-left: ${({ delimited }) =>
    delimited ? `1px solid ${colors.grey["700"]}` : "none"};
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
