import { LayoutProps } from "styled-system";

export interface Props {
  src?: string;
  size?: string;
}
export interface AvatarSize {
  small?: number;
  medium?: number;
  large?: number;
  index?: string;
}

export interface PropsStyle extends LayoutProps {}

export const defaultProps = {
  size: "large",
  src: "",
};
