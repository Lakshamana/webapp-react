import { FlexboxProps, LayoutProps, SpaceProps } from "styled-system";

export interface Props extends FlexboxProps, LayoutProps, SpaceProps {
  children: JSX.Element | JSX.Element[];
  emptyHeader: boolean
}

export const defaultProps = {
  display: "flex",
  alignItems: "flex-start",
  emptyHeader: false
};
