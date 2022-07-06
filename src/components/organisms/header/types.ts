import { SpaceProps } from "styled-system";
import { Channel } from 'generated/graphql'
import { ColorMode } from 'types/common'

export type User = {
  name: string;
  id: string;
  avatar: string;
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

export interface PropsSearchBar {
  open: boolean;
  onOpen: any;
  onClose: any;
  search: string;
  colorMode: ColorMode;
}

export interface PropsChannels {
  channels: Channel[];
  selected: Channel;
  onSelect: any;
  colorMode: ColorMode;
  isLoading?: boolean;
}

export interface PropsSearchPopover {
  data: Array<SearchResults>;
  textColor?: string;
  section?: string;
}

export interface PropsMenuIcon extends SpaceProps {
  open: boolean;
  setOpen: any;
}

export interface PropsSideMenu {
  open: boolean;
  closeMenuAction: any;
  loading: boolean;
  data: [];
  children: JSX.Element | JSX.Element[]
}

export const defaultProps = {};
