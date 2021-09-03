import { FontSizeProps, SpaceProps } from "styled-system";

export interface Props extends FontSizeProps, SpaceProps {
  children: string;
  kind?: string;
}

export const defaultProps = {
  kind: "regular"
};
