import styled from "styled-components";
import { layout, border, space, fontSize } from "styled-system";
import { PropsStyle } from "./types";

const getStyleDisabled = (disabled: boolean | undefined) =>
  disabled && "opacity: 0.7;";

export const Box = styled.div<PropsStyle>`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: ${({ error }) => (error ? "76px;" : "64px;")};
`;

export const BoxWrapper = styled.div<PropsStyle>`
  ${space}
  ${layout}
  ${border}
  background-color: ${({ error }) => (error ? "#FFF2F2;" : "#FAFAFA;")};
  border-radius: ${({ theme }) => "4px"};
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  ${({ onClick, disabled }: PropsStyle) =>
    !disabled && !!onClick && "cursor: pointer;"}
  ${({ disabled }: PropsStyle) => getStyleDisabled(disabled)}

  svg {
    padding-right: 8px;
    padding-left: 8px;
    width: 32px;
  }
`;

export const BoxWrapperError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LabelError = styled.label`
  color: #ff0000;
  font-size: 12px;
`;
