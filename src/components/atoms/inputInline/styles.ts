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
}

export const Input: any = styled.input<PropsStyle>`
  ${layout}
  ${space}
  ${fontSize}
  ${commonStyles}
  background-color: ${({ background }) => background};
  color: white;
  border-radius: 4px;
  width: 100%;
`;

export const InputMask: any = styled(InputMasked)<PropsStyle>`
  ${layout}
  ${space}
  ${commonStyles}
  ${fontSize}
`;
