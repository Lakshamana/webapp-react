import { FontSizeProps, SpaceProps } from "styled-system";

export interface Props {
  disabled: boolean;
}

export interface PropsStyle extends FontSizeProps, SpaceProps {
  disabled?: boolean;
}
