import { SpaceProps } from "styled-system";

interface Channel {
  name: string;
  id: string;
  url: string;
}

export interface PropsChannels {
  channels: Array<Channel>;
  selected: Channel;
  onSelect: any;
}

export interface PropsSearch {
  search: string;
  onChange: any;
}

export interface PropsSelectedChannel {
  open: boolean;
  selected: Channel | null;
}

export interface Props extends SpaceProps, PropsChannels {
  onSearch: any;
}

export const defaultProps = {
  channels: [],
  selected: undefined,
  onSelect: () => {},
};
