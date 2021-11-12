import { LayoutProps, SpaceProps, FlexboxProps } from "styled-system";

export interface Props extends FlexboxProps, LayoutProps, SpaceProps {
  height?: number;
  width?: number;
  colorMode?: string;
}

export const defaultProps = {
  height: 38,
  width: 140,
};
