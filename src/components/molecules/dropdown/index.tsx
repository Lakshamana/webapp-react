import React, { useState } from "react";
import { Main } from "./style";

import { Props, defaultProps } from "./types";

const Dropdown = ({}: Props) => {
  const [show, setShow] = useState(false);

  return <Main></Main>;
};

Dropdown.defaultProps = defaultProps;

export { Dropdown };