import { LayoutProps, SpaceProps, FlexboxProps } from "styled-system";

export interface Props extends FlexboxProps, LayoutProps, SpaceProps {
  children: any;
  backgroundColor?: string;
}

export const defaultProps = {
  display: "flex",
  alignItems: "flex-start",
};
