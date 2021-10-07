import styled from "styled-components";
import { StyleContainer } from "components/atoms";

interface RadioContainerProps {
  color?: string;
}

export const RadioContainer = styled(StyleContainer)<RadioContainerProps>`
  display: flex;
  ${({ color }) =>
    color
      ? `span {
    color: ${color}
  }`
      : ""}
`;
