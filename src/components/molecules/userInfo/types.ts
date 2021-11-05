export interface PropsPopoverOption {
  icon: any;
  text: string;
  onClick: any;
}

export type User = {
  name: string;
  id: string;
  avatar: string;
};

export interface PropsUserInfo {
  user: User | undefined;
  delimited?: boolean;
  mode?: string;
}
