import React, { useState } from "react";

import { Icon } from "@iconify/react";

import { BoxWrapper, BoxWrapperError, LabelError, Box } from "./styles";

import { Props } from "./types";
import { defaultProps } from "./settings";

const InputWrapper = ({
  children,
  label,
  error,
  errorMessage,
  required,
  maxLength,
  disabled,
  width,
  height,
  type = "",
  background = "",
  placeholderColor = "",
  rightIcon = "",
  leftIcon = "",
  onChangeShowPassword = () => {},
  onEnterPress = () => {},
  ...props
}: Props): any => {
  const [showPassword, setShowPassword] = useState(type !== "password");

  const renderRightIcon = () => {
    if (error) {
      return (
        <Icon
          icon="eva:alert-circle-fill"
          width="42"
          height="42"
          color="#d9534f"
        />
      );
    }

    if (type === "password") {
      //Waiting the other icon to put here (Iuri Design)
      return showPassword ? (
        <Icon
          style={{ cursor: "pointer", color: '#aaa' }}
          icon="akar-icons:eye-open"
          width="42"
          height="42"
          onClick={() => {
            setShowPassword(!showPassword);
            onChangeShowPassword(!showPassword);
          }}
        />
      ) : (
        <Icon
          icon="akar-icons:eye-slashed"
          width="42"
          height="42"
          style={{ cursor: "pointer", color: '#aaa' }}
          onClick={() => {
            setShowPassword(!showPassword);
            onChangeShowPassword(!showPassword);
          }}
        />
      );
    }

    switch (rightIcon) {
      case "send":
        return (
          <Icon
            icon="fluent:send-28-filled"
            width="42"
            height="42"
            color="#2984F5"
            style={{ cursor: "pointer" }}
            onClick={() => onEnterPress()}
          />
        );

      case "check":
        return (
          <Icon
            icon="akar-icons:circle-check-fill"
            width="42"
            height="42"
            color="#5cb85c"
          />
        );

      default:
        break;
    }
  };

  const renderLeftIcon = () => {
    switch (leftIcon) {
      default:
        return;
    }
  };

  return (
    <Box error={error}>
      <BoxWrapper
        width={width || "100%"}
        minHeight={height || 56}
        error={error}
        background={background}
        borderRadius={4}
      >
        {renderLeftIcon()}
        {children}
        {renderRightIcon()}
      </BoxWrapper>
      {error && (
        <BoxWrapperError>
          <LabelError>{errorMessage}</LabelError>
        </BoxWrapperError>
      )}
    </Box>
  );
};

InputWrapper.defaultProps = defaultProps;

export { InputWrapper };
