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
  children: JSX.Element | JSX.Element[];
  onClick?: any;
  backgroundColor?: string;
}

export const defaultProps = {
  display: "flex",
  alignItems: "flex-start",
  padding: 0,
};
