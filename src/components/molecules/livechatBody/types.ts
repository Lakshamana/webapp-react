import { LayoutProps } from "styled-system";
export interface Props {
  options?: Array<Item>;
}

interface Item {
  isOwnUser?: boolean;
  username?: string;
  date?: string;
  message?: string;
  iconUrl?: string;
}

export interface StyledProps extends LayoutProps {}