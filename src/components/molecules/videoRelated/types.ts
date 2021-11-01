import { FlexboxProps, LayoutProps } from "styled-system";

export interface Props {
  title?: string;
  description?: string;
  urlImage?: string;
}

export interface StyleProps extends FlexboxProps, LayoutProps {}
