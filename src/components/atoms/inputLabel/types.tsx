import { FontSizeProps, SpaceProps } from "styled-system";

export interface Props {
  disabled: Boolean;
}

export interface PropsStyle extends FontSizeProps, SpaceProps {
  disabled?: Boolean;
}
