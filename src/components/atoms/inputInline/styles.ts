import styled from "styled-components";
import {
  layout,
  space,
  fontSize,
  LayoutProps,
  SpaceProps,
  FontSizeProps,
} from "styled-system";
import InputMasked from "react-input-mask";

const commonStyles = `
  &:focus {
    outline: none;
  }
`;

interface PropsStyle extends LayoutProps, SpaceProps, FontSizeProps {
  background?: string;
  color?: string;
  placeholderColor?: string;
}

export const Input: any = styled.input<PropsStyle>`
  ${layout}
  ${space}
  ${fontSize}
  ${commonStyles}
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  border-radius: 4px;
  width: 100%;
  padding-left: 16px;
  font-size: 16px;
  width: 100%;

  &::placeholder {
    color: ${({ placeholderColor }) => `${placeholderColor};`};
  }
`;

export const InputMask: any = styled(InputMasked)<PropsStyle>`
  ${layout}
  ${space}
  ${commonStyles}
  ${fontSize}
`;
