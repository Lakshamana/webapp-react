import { FlexboxProps } from "@chakra-ui/react";
import { LayoutProps, SpaceProps, GridProps } from "styled-system";

export interface Props {
  sendMessage: (message: string) => void
}

export interface StyledProps
  extends LayoutProps,
    FlexboxProps,
    SpaceProps,
    GridProps {}
