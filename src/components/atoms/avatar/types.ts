import { LayoutProps } from "styled-system";

export interface Props {
  icon?: string;
  size?: string;
  colorIcon?: string;
  backgroundAvatar?: string;
}
export interface AvatarSize {
  small?: number;
  medium?: number;
  large?: number;
  index?: string;
}

export interface StyledProps extends LayoutProps {
  background?: string;
}

export const defaultProps = {
  size: "large",
  icon: "ant-design:user-outlined",
  colorIcon: "#000",
};