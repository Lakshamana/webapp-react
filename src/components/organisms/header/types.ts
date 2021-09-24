import { SpaceProps } from "styled-system";

export interface Channel {
  name: string;
  id: string;
  url: string;
}

export interface User {
  name: string;
  id: string;
  avatar: string;
}

export interface Props extends SpaceProps {}

export interface PropsUserInfo {
  user: User | undefined;
}

export interface PropsTabs {
  selected: Channel | undefined;
  setSelected: any;
}

export const defaultProps = {};
