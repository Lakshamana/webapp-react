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
  user: User | undefined;
  delimited?: boolean;
  colorMode: "light" | "dark";
  toggleColorMode: any;
}
