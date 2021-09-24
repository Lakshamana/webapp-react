import { LayoutProps, SpaceProps, FontSizeProps } from "styled-system";

export interface Props extends LayoutProps, SpaceProps, FontSizeProps {
  value?: String;
  onChange: Function;
  placeholder?: String;
  mask?: any;
  type?: String;
  hasBorder?: Boolean;
  focus?: Boolean;
  background?: string;
}
