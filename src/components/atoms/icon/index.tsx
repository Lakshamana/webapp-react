import React from "react";

import { Props } from "./types";
import { IconContainer } from "./styles";

const Icon = ({ name, fontAwesome, ...props }: Props): any => {
  return <IconContainer size={props.size}>{props.children}</IconContainer>;
};

export { Icon };
