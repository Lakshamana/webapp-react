import { SpaceProps } from "styled-system";

export type User = {
  name: string;
  id: string;
  avatar: string;
};

type ColorMode = "dark" | "light";
type DisplayMode = 'menu' | 'sidebar';

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

export interface PropsTabs {
  selected: Tab | undefined;
  setSelected: any;
  data: Array<Tab>;
  colorMode: ColorMode;
}

export interface PropsSearchBar {
  open: boolean;
  onSearch: any;
  onOpen: any;
  onClose: any;
  search: string;
  data: Array<SearchResults>;
  colorMode: ColorMode;
}

export interface PropsChannels {
  channels: Array<Channel>;
  selected: Channel;
  onSelect: any;
  colorMode: ColorMode;
}

export interface PropsChannelSearch {
  search: string;
  onChange: any;
  colorMode: ColorMode;
}

export interface PropsChannelSelected {
  display: DisplayMode;
  open: boolean;
  selected: Channel | null;
  colorMode: ColorMode;
}

export interface PropsSearchPopover {
  data: Array<SearchResults>;
  textColor?: string;
  section?: string;
}

export interface PropsChannelSelector extends SpaceProps, PropsChannels {
  display: DisplayMode;
  onSearch: any;
}

export interface PropsMenuIcon extends SpaceProps {
  open: boolean;
  setOpen: any;
}

export interface PropsSideMenu {
  open: boolean;
  data: Array<Tab>;
  selected: Tab | undefined;
  colorMode: ColorMode;
  children: JSX.Element | JSX.Element[]
}

export const defaultProps = {};
