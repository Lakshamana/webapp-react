import {
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  PositionProps,
  TypographyProps,
  GridProps,
} from "styled-system";

export interface Props
  extends FlexboxProps,
    LayoutProps,
    SpaceProps,
    PositionProps,
    TypographyProps,
    GridProps {
  children: any;
  onClick?: any;
  backgroundColor?: string;
}

export const defaultProps = {
  display: "flex",
  alignItems: "flex-start",
};
