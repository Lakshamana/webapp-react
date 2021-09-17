import {
  Popover as ChakraPopover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";

import { Props, defaultProps } from "./types";

const Popover = ({ children, trigger, background, props }: Props) => (
  <ChakraPopover {...props}>
    <PopoverTrigger>{trigger}</PopoverTrigger>
    <PopoverContent bg={background}>
      <PopoverArrow />
      <PopoverBody>{children}</PopoverBody>
    </PopoverContent>
  </ChakraPopover>
);

Popover.defaultProps = defaultProps;

export { Popover };
