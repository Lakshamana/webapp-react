import { FlexboxProps } from "@chakra-ui/react";
import { LayoutProps, SpaceProps, GridProps } from "styled-system";

export interface Props {
  onPressIcon?: Function;
  value?: string;
  onChange?: Function;
  onEnter?: Function;
}

export interface StyledProps
  extends LayoutProps,
    FlexboxProps,
    SpaceProps,
    GridProps {}
