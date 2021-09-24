import React from "react";

import { Props } from "./types";
import { Input, InputMask } from "./styles";

const InputInline = ({ mask, background, ...props }: Props) => {
  const ref: any = React.useRef(null);

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
    <Input {...{ ...props, ref, background }} />
  );
};

export { InputInline };
