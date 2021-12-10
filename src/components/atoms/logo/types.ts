import { LayoutProps, SpaceProps, FlexboxProps } from "styled-system";

export interface Props extends FlexboxProps, LayoutProps, SpaceProps {
  height?: number;
  width?: number;
}

export const defaultProps = {
  width: 140
};
