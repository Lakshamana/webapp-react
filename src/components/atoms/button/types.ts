import {
  ColorProps,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  BorderProps,
  VariantArgs,
} from "styled-system";

type ButtonType = "submit" | "reset" | "billboard" | "disabled" | "cancel" | "children" | "outlined"

export interface ButtonProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    VariantArgs,
    BorderProps,
    ColorProps {
  label?: string;
  style?: React.CSSProperties;
  type?: ButtonType;
  iconName?: string;
  onClick?: Function;
  children?: any;
}

export const defaultProps = {
  type: "submit",
};
