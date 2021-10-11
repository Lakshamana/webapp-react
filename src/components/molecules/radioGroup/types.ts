import { SpaceProps, LayoutProps, FlexboxProps } from "styled-system";
import { RadioProps } from "components/atoms/radio/types";

export interface RadioGroupProps extends SpaceProps, LayoutProps, FlexboxProps {
  radios: Array<RadioProps>;
  title?: string;
  size?: string;
  name: string;
  color?: string;
  onChange?: any;
}

export const defaultProps = {
  flexDirection: "column",
  size: "sm",
  onChange: () => {},
};
