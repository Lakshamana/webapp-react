import React from "react";
import PropTypes from "prop-types";

import { Props } from "./types";
import { Input, InputMask } from "./styles";

const InputInline = ({ mask, ...props }: Props) => {
  const ref = React.useRef(null);

  React.useEffect((): any => {
    if (props.focus) ref?.current?.focus();
  }, [props.focus]);

  return mask ? (
    <InputMask
      ref={ref}
      {...props}
      mask={mask}
      maskPlaceholder={props.placeholder}
    />
  ) : (
    <Input ref={ref} {...props} />
  );
};

export { InputInline };
