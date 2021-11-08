import { LayoutProps, SpaceProps, FontSizeProps } from "styled-system";

export interface Props extends LayoutProps, SpaceProps, FontSizeProps {
  value?: string;
  onChange: any;
  placeholder?: string;
  mask?: any;
  type?: string;
  hasBorder?: boolean;
  focus?: boolean;
  error?: boolean;
  errorMessage?: string;
  onKeyDown?: any;
  name?: string;

  background?: string;
  color?: string;
  placeholderColor?: string;

  autocomplete?: string;
}
