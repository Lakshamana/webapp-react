import { LayoutProps, SpaceProps, FlexboxProps } from "styled-system";

export interface Props extends FlexboxProps, LayoutProps, SpaceProps {
  children: any;
}

export const defaultProps = {
  display: "flex",
  alignItems: "flex-start",
  padding: 0,
};
