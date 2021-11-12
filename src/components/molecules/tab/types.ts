import { SpaceProps } from "styled-system";

export interface Props extends SpaceProps {
  link: string;
  children: any;
  selected?: boolean;
  onSelect: any;
  color: string;
}

export const defaultProps = {
  text: "",
  link: "",
  selected: false,
  onSelect: () => {},
};
