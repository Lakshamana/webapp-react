import { SpaceProps } from "styled-system";
import { channels } from "./settings";

interface Channel {
  name: string;
  id: string;
  url: string;
}

export interface Props extends SpaceProps {
  channels: Array<Channel>;
  onSelect: any;
  selected: string;
}

export const defaultProps = {
  channels,
  selected:
    "https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png",
  onSelect: () => {},
};
