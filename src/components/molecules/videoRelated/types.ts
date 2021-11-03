import { FlexboxProps, LayoutProps, SpaceProps } from "styled-system";

export interface Props {
  options?: Array<Item>;
  onSelect?: Function;
  onAutoplay?: Function;
  initialAutoplayValue?: boolean;
}

interface Item {
  title: string;
  description: string;
  urlImage: string;
}

export interface StyleProps extends FlexboxProps, LayoutProps, SpaceProps {
  backgroundUrl?: string;
}
