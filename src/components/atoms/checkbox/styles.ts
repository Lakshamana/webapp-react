import styled from "styled-components";
import { StyleContainer } from "components/atoms";

interface CheckboxContainerProps {
  color?: string;
}

export const CheckboxContainer = styled(StyleContainer)<CheckboxContainerProps>`
  display: flex;
  ${({ color }) =>
    color
      ? `span {
    color: ${color}
  }`
      : ""}
`;
