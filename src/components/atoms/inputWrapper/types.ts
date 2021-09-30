import {
  LayoutProps,
  BorderProps,
  SpaceProps,
  FontSizeProps,
} from "styled-system";

export interface Props {
  children?: any;
  label?: String | Number;
  error?: String | Boolean;
  bottomLabel?: String;
  bottomLabelColor?: String;
  required?: Boolean;
  disabled?: Boolean;
  maxLength?: Number;
  totalChars?: Number;
  bgColor?: String;
  noPadding?: Boolean;
  customIdent?: String;
  full?: Boolean;
  kind?: Kind;
  hasBottomLine?: Boolean;
  border?: String;
  width?: any;
  height?: any;
}

export interface PropsStyle
  extends LayoutProps,
    BorderProps,
    SpaceProps,
    FontSizeProps {
  hasBottomLine?: Boolean;
  error?: Boolean | any;
  theme?: any;
  onClick?: Function;
  disabled?: Boolean;
  bgColor?: String;
  noPadding?: Boolean;
  customIdent?: any;
  full?: Boolean;
  center?: Boolean;
  bottomLabelColor?: String;
}

type Kind = "default" | "box";
