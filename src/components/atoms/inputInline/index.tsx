import React from "react";

import { Props } from "./types";
import { Input, InputMask } from "./styles";

const InputInline = ({
  mask,
  onChange,
  onBlur,
  placeholder = "",
  error = false,
  errorMessage = "",
  onKeyDown = () => {},
  background = "",
  color = "",
  placeholderColor = "",
  ...props
}: Props) => {
  const ref: any = React.useRef(null);

  React.useEffect((): any => {
    if (props.focus) ref?.current?.focus();
  }, [props.focus]);

  return mask ? (
    <InputMask ref={ref} {...props} mask={mask} maskPlaceholder={placeholder} />
  ) : (
    <Input
      {...{
        ...props,
        ref,
        error,
        placeholder,
        onChange,
        onKeyDown,
        onBlur,
        color,
        placeholderColor,
        background,
      }}
    />
  );
};

export { InputInline };
