import { SpaceProps, LayoutProps, FlexboxProps } from "styled-system";
import { RadioProps } from "components/atoms/radio/types";

export interface RadioGroupProps extends SpaceProps, LayoutProps, FlexboxProps {
  radios: Array<RadioProps>;
  title?: string;
  size?: string;
  name: string;
  color?: string;
  onChange?: any;
  defaultValue?: string;
}

export const defaultProps = {
  flexDirection: "column",
  size: "sm",
  defaultValue: "",
  onChange: () => {},
};
