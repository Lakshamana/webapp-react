import {
  LayoutProps,
  SpaceProps,
  FlexboxProps,
  PositionProps,
} from "styled-system";

export interface Props
  extends FlexboxProps,
    LayoutProps,
    SpaceProps,
    PositionProps {
  children: any;
  onClick?: any;
  backgroundColor?: string;
}

export const defaultProps = {
  display: "flex",
  alignItems: "flex-start",
};
