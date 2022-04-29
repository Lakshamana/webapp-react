import { LayoutProps, SpaceProps, FlexboxProps } from "styled-system";

export interface Props extends FlexboxProps, LayoutProps, SpaceProps {
  children: JSX.Element | JSX.Element[];
}

export const defaultProps = {
  display: "flex",
  alignItems: "flex-start",
};
