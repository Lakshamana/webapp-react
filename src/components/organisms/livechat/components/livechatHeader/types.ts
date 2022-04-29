import { FlexboxProps } from "@chakra-ui/react";
import { LayoutProps } from "styled-system";

export interface Props {
  title?: string;
  onCloseChat?: Function;
  colorMode?: string;
}

export interface StyledProps extends LayoutProps, FlexboxProps {}