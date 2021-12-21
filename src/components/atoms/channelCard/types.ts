import { LayoutProps } from "styled-system";

export interface ChannelProps extends LayoutProps {
  id?: string;
  name?: string;
  image: string;
  url?: string;
  text?: string;
  isGeolocked?: boolean;
  isExclusive?: boolean;
  onClick?: any;
}
