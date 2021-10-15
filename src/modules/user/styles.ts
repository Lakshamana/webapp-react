import styled from "styled-components";
import { StyleContainer } from "components";
import { space, layout, SpaceProps, LayoutProps } from "styled-system";
import { colors } from "styles";

interface PropsOptionContainer extends SpaceProps {
  selected: boolean;
}

interface ColumnProps extends SpaceProps, LayoutProps {}

const getContainerStyle = (selected: boolean) => {
  if (selected) {
    return `background: ${colors.grey["1000"]};
      p, svg {
        color: ${colors.blue["300"]};
      }
      border-right: 2px solid ${colors.blue["300"]};
      `;
  }
  return `
  p, svg {
    color: ${colors.white}
  }
  `;
};

export const OptionContainer = styled(StyleContainer)<PropsOptionContainer>`
  cursor: pointer;
  ${({ selected }) => getContainerStyle(selected)}
`;

export const Line = styled.div<PropsOptionContainer>`
  ${space}
  height: 3px;
  width: 90%;
  background: ${colors.blue["300"]};
  ${({ selected }) =>
    selected ? "visibility: visible" : "visibility: hidden"};
`;

export const Column = styled.div<ColumnProps>`
  ${space}
  ${layout}
  background: ${colors.grey["900"]};
  flex: 1;
`;
