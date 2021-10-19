import {
  LayoutProps,
  BorderProps,
  SpaceProps,
  FontSizeProps,
} from "styled-system";

export interface Props {
  title?: string;
}

export interface PropsStyle
  extends LayoutProps,
    BorderProps,
    SpaceProps,
    FontSizeProps {}
