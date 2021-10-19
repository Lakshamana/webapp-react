import React, { useState } from "react";

import { ReactComponent as ErrorIcon } from "assets/icons/inputError.svg";
import { ReactComponent as SendIcon } from "assets/icons/send.svg";
import { ReactComponent as PasswordUnShowIcon } from "assets/icons/passwordUnshow.svg";
// import { ReactComponent as PasswordShowIcon } from "assets/icons/password.svg";
import { ReactComponent as CheckIcon } from "assets/icons/checkIcon.svg";

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
  onChangeShowPassword = () => {},
  ...props
}: Props): any => {
  const [showPassword, setShowPassword] = useState(type !== "password");

  const renderRightIcon = () => {
    if (error) {
      return <ErrorIcon />;
    }

    if (type === "password") {
      //Waiting the other icon to put here (Iuri Design)
      return showPassword ? (
        <PasswordUnShowIcon
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowPassword(!showPassword);
            onChangeShowPassword(!showPassword);
          }}
        />
      ) : (
        <PasswordUnShowIcon
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowPassword(!showPassword);
            onChangeShowPassword(!showPassword);
          }}
        />
      );
    }

    switch (rightIcon) {
      case "send":
        return <SendIcon />;

      case "check":
        return <CheckIcon />;

      default:
        break;
    }
  };

  return (
    <Box error={error}>
      <BoxWrapper
        width={width || "100%"}
        minHeight={height || 56}
        error={error}
        background={background}
      >
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
