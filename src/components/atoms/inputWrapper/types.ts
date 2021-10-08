import {
  LayoutProps,
  BorderProps,
  SpaceProps,
  FontSizeProps,
} from "styled-system";

export interface Props {
  children?: any;
  label?: string | Number;
  error?: string | boolean;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  maxLength?: Number;
  border?: string;
  width?: any;
  height?: any;
  sendIcon?: boolean
}

export interface PropsStyle
  extends LayoutProps,
    BorderProps,
    SpaceProps,
    FontSizeProps {
  error?: boolean | any;
  theme?: any;
  onClick?: Function;
  disabled?: boolean | undefined;
  bgColor?: string;
  noPadding?: boolean;
  customIdent?: any;
  full?: boolean;
  center?: boolean;
}
