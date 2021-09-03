import { LayoutProps, SpaceProps, FlexboxProps } from "styled-system";

export interface Props extends FlexboxProps, LayoutProps, SpaceProps {
  children: React.ReactNode;
}

export const defaultProps = {
  display: "flex",
  alignItems: "flex-start",
  padding: 0
};
