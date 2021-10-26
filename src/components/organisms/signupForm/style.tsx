import styled from "styled-components";
import { space, layout, SpaceProps, LayoutProps } from "styled-system";

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
