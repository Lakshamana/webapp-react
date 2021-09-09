import { TypographyProps, SpaceProps } from "styled-system";

export interface Props extends TypographyProps, SpaceProps {
  children: string;
  kind?: string;
}

export const defaultProps = {
  kind: "regular"
};
