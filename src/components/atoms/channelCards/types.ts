import { LayoutProps } from "styled-system";
export interface ChannelsProps extends LayoutProps {
  id?: string;
  name?: string;
  image: string;
  url?: string;
  text?: string;
  isGeolocked?: boolean;
  isExclusive?: boolean;
  onClick?: any;
}

export interface StyledProps extends LayoutProps {
  image: string;
}

export const defaultProps = {
  isExclusive: false,
  isGeolocked: false,
};
