import React, { useState } from "react";
import { InputInline, InputWrapper } from "components/atoms";

import { Props } from "./types";

const Input = ({
  name,
  placeholder,
  value,
  type = "text",
  onChange,
  onBlur,
  onEnterPress = () => {},
  error,
  errorMessage,
  rightIcon = "",
}: Props) => {
  const [showPassword, setShowPassword] = useState(type !== "password");

  return (
    <InputWrapper
      {...{ error, errorMessage, rightIcon, type, name }}
      background="#444444"
      color="white"
      placeholderColor="#F2FFF8"
      onChangeShowPassword={setShowPassword}
      {...{onEnterPress}}
    >
      <InputInline
        {...{ onChange, onBlur, value, error, placeholder }}
        name={name}
        type={showPassword ? "text" : type}
        background="#444444"
        color="#fff"
        autocomplete="off"
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
