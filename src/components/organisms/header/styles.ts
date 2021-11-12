import styled from "styled-components";
import { StyleContainer } from "components";
import { space, layout, SpaceProps, LayoutProps } from "styled-system";
import { breakpoints } from "styles";

interface CircleLayout extends SpaceProps, LayoutProps {
  selected?: boolean;
}

export const Circle = styled.div<CircleLayout>`
  ${space}
  ${layout}
  display: flex;
  background-color: ${({ selected, theme }) =>
    selected && theme.colors.blue["300"]};
  border-radius: 50%;
`;

export const HeaderContainer = styled(StyleContainer)`
  display: flex;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.headerBg[theme.colorMode]};

  @media screen and (min-width: ${breakpoints.md}) {
    padding: 0 32px;
  }

  @media screen and (min-width: ${breakpoints.lg}) {
    padding: 0 65px;
  }
`;

export const LogoContainer = styled.div`
  padding: 0 16px;

  @media screen and (min-width: ${breakpoints.xl}) {
    padding: 0 32px;
  }
`;
