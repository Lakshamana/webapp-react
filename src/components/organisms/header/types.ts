import { SpaceProps } from "styled-system";

export type User = {
  name: string;
  id: string;
  avatar: string;
};

export type Channel = {
  name: string;
  id: string;
  url: string;
};

export type Tab = {
  label: string;
  id: string;
  url: string;
};

export type ContentResults = {
  text: string;
  id: string;
};

export type SearchResults = {
  label: string;
  id: string;
  children: Array<ContentResults>;
};

export interface PropsUserInfo {
  user: User | undefined;
}

export interface PropsTabs {
  selected: Tab | undefined;
  setSelected: any;
  data: Array<Tab>;
}

export interface PropsSearchBar {
  open: boolean;
  onSearch: any;
  onOpen: any;
  onClose: any;
  search: string;
  data: Array<SearchResults>;
}

export interface PropsPopoverOption {
  icon: any;
  text: string;
  onClick: any;
}

export interface PropsChannels {
  channels: Array<Channel>;
  selected: Channel;
  onSelect: any;
}

export interface PropsChannelSearch {
  search: string;
  onChange: any;
}

export interface PropsChannelSelected {
  open: boolean;
  selected: Channel | null;
}

export interface PropsSearchPopover {
  data: Array<SearchResults>;
}

export interface PropsChannelSelector extends SpaceProps, PropsChannels {
  onSearch: any;
}

export interface PropsMenuIcon extends SpaceProps {
  open: boolean;
  setOpen: any;
}

export interface PropsSideMenu {
  open: boolean;
  data: Array<Tab>;
  user: User | undefined;
}

export interface PropsSideUserInfo {
  user: User | undefined;
}

export const defaultProps = {};
