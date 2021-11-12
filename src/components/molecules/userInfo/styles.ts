import styled from "styled-components";
import { StyleContainer } from "components";
import { space, layout, SpaceProps, LayoutProps } from "styled-system";
import { breakpoints } from "styles";

interface UserContainerProps extends SpaceProps {
  delimited: boolean;
}

export const UserContainer = styled.div<UserContainerProps>`
  ${space}
  display: flex;
  align-items: center;
  border-left: ${({ theme, delimited }) =>
    delimited ? `1px solid ${theme.colors.grey["700"]}` : "none"};
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

export const TextContainer = styled(StyleContainer)`
  display: flex;
  padding: 0 16px;

  @media screen and (min-width: ${breakpoints.xl}) {
    padding: 0 32px;
  }
`;
