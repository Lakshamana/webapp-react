import {
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  PositionProps,
  TypographyProps,
} from "styled-system";

export interface Props
  extends FlexboxProps,
    LayoutProps,
    SpaceProps,
    PositionProps,
    TypographyProps {
  children: any;
  onClick?: any;
  backgroundColor?: string;
}

export const defaultProps = {
  display: "flex",
  alignItems: "flex-start",
};
