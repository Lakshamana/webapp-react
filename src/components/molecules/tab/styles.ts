import styled from "styled-components";
import { layout, LayoutProps } from "styled-system";

interface CircleLayout extends LayoutProps {
  selected?: boolean;
}

export const Circle = styled.div<CircleLayout>`
  ${layout}
  position: absolute;
  bottom: -10px;
  display: flex;
  background-color: ${({ selected }) => selected && "#0660F9"};
  border-radius: 50%;
`;
