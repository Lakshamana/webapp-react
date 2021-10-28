import {
  LayoutProps,
  BorderProps,
  SpaceProps,
  FontSizeProps,
  ColorProps,
} from "styled-system";

export interface Props {
  title?: string;
}

export interface PropsStyle
  extends LayoutProps,
    BorderProps,
    SpaceProps,
    FontSizeProps, ColorProps {}

export const defaultProps: Props = {
  title: "",
};
