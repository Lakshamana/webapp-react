import { LayoutProps, SpaceProps, FontSizeProps } from "styled-system";

export interface Props extends LayoutProps, SpaceProps, FontSizeProps {
  value?: string;
  onChange: any;
  placeholder?: string;
  mask?: any;
  type?: string;
  hasBorder?: boolean;
  focus?: boolean;
  background?: string;
  error?: boolean;
  errorMessage?: string;
  onKeyDown?: any;
}
