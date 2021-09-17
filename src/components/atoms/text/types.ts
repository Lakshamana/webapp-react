import { TypographyProps, SpaceProps } from "styled-system";

export interface Props extends TypographyProps, SpaceProps {
  children: string;
  kind?: string;
  style?: React.CSSProperties;
  color?: string;
}

export const defaultProps = {
  kind: "regular",
};
