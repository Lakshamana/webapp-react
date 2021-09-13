import styled from "styled-components";
import { layout, space, fontSize } from "styled-system";
import InputMasked from "react-input-mask";
import { PropsStyle } from "./types";

const commonStyles = `
  width: 98%;
  border: none;
  background-color: #fff;
  &:focus {
    outline: none;
  }
`;

export const Input: any = styled.input`
  ${layout}
  ${space}
  ${fontSize}
  ${commonStyles}
  border-radius: 4px;
  /* color: ${({ theme }) => theme.colors.text[theme.mode]}; */
  ${(props: PropsStyle) =>
    props.hasBorder && "border: 1px solid #f2f2f2;"}/* ${({ theme }) =>
    theme.name === "studio" && "background-color: transparent;"} */
`;

export const InputMask: any = styled(InputMasked)`
  ${layout}
  ${space}
  ${commonStyles}
  ${fontSize}
  /* color: ${({ theme }) => theme.colors.text[theme.mode]}; */
  ${(props: PropsStyle) =>
    props.hasBorder && "border: 1px solid #f2f2f2;"} /* ${({ theme }) =>
    theme.name === "studio" && "background-color: transparent;"} */
`;
