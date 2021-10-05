import React, { useState } from "react";
import { InputInline, InputWrapper } from "components/atoms";

import { Props } from "./types";

const Input = ({
  onChange,
  value,
  type,
  placeholder,
  error,
  errorMessage,
  sendIcon,
  onEnterPress = () => {},
}: Props) => {
  return (
    <InputWrapper error={error} errorMessage={errorMessage} sendIcon={sendIcon}>
      <InputInline
        onChange={onChange}
        value={value}
        type={type}
        error={error}
        placeholder={placeholder}
        onKeyDown={(e: any) => {
          if (e.keyCode === 13) {
            onEnterPress();
          }
        }}
      />
    </InputWrapper>
  );
};

export { Input };
