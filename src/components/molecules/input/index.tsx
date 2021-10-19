import React, { useState } from "react";
import { InputInline, InputWrapper } from "components/atoms";

import { Props } from "./types";

const Input = ({
  placeholder,
  value,
  type = "text",
  onChange,
  onEnterPress = () => {},
  error,
  errorMessage,
  rightIcon = "",
}: Props) => {
  const [showPassword, setShowPassword] = useState(type !== "password");

  return (
    <InputWrapper
      {...{ error, errorMessage, rightIcon, type }}
      background="#444444"
      color="white"
      placeholderColor="#F2FFF8"
      onChangeShowPassword={setShowPassword}
    >
      <InputInline
        {...{ onChange, value, error, placeholder }}
        type={showPassword ? "text" : type}
        background="#444444"
        color="white"
        placeholderColor="#F2FFF8"
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
