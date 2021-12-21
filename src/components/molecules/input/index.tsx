import { useState } from "react";
import { InputInline, InputWrapper } from "components/atoms";

import { Props } from "./types";
import { useThemeStore } from "services/stores/theme";

const Input = ({
  name,
  placeholder,
  value,
  type = "text",
  onChange,
  onEnterPress = () => { },
  error,
  errorMessage,
  rightIcon = "",
}: Props) => {
  const [showPassword, setShowPassword] = useState(type !== "password");
  const { colorMode } = useThemeStore()

  return (
    <InputWrapper
      {...{ error, errorMessage, rightIcon, type, name }}
      background={colorMode === "light" ? "#e0e1e1" : "#fff"}
      color="white"
      placeholderColor="#F2FFF8"
      onChangeShowPassword={setShowPassword}
      {...{ onEnterPress }}
    >
      <InputInline
        {...{ onChange, value, error, placeholder }}
        name={name}
        type={showPassword ? "text" : type}
        background={colorMode === "light" ? "#e0e1e1" : "#fff"}
        color="#000"
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
