import styled from "styled-components";
import { StyleContainer } from "components";
import { colors } from "styles";

interface PropsOptionContainer {
  selected: boolean;
}

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
