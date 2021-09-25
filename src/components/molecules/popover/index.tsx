import {
  Popover as ChakraPopover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";

import { Props, defaultProps } from "./types";

const Popover = ({ children, trigger, background, props }: Props) => (
  <ChakraPopover {...props}>
    <PopoverTrigger>{trigger}</PopoverTrigger>
    <PopoverContent bg={background}>
      <PopoverBody>{children}</PopoverBody>
    </PopoverContent>
  </ChakraPopover>
);

Popover.defaultProps = defaultProps;

export { Popover };
