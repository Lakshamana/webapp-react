import { SpaceProps, LayoutProps } from "styled-system";
export interface Props {
  title?: string;
  width?: string;
  children?: any;
  onClose?: Function;
  show?: boolean;
}

export interface StyledProps extends SpaceProps, LayoutProps {
}
