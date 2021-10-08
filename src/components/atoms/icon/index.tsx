import React from "react";

import { Props } from "./types";
import { IconContainer } from "./styles";

const Icon = ({ name, size, children }: Props): any => (
  <IconContainer size={size}>{children}</IconContainer>
);

export { Icon };
