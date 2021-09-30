import React from "react";

import { Props } from "./types";
import { IconContainer } from "./styles";

const Icon = ({ name, fontAwesome, size, children }: Props): any => {
  return <IconContainer size={size}>{children}</IconContainer>;
};

export { Icon };
