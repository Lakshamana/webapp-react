import { TypographyProps, SpaceProps, TextStyleProps } from "styled-system";

export interface Props extends TypographyProps, SpaceProps, TextStyleProps {
  children: any;
  kind?: string;
  style?: React.CSSProperties;
  color?: string;
  ellipsis?: boolean;
}

export const defaultProps = {
  kind: "regular",
};
