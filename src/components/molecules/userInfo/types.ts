import { ColorMode } from 'types/common';

export interface PropsPopoverOption {
  icon: any;
  text: string;
  onClick: any;
  color: string;
}

export type User = {
  name: string;
  id: string;
  avatar: string;
};

export interface PropsUserInfo {
  display: 'sidebar' | 'menu';
  delimited?: boolean;
  colorMode: ColorMode;
  closeSideMenu?: any;
  toggleColorMode: any;
}
