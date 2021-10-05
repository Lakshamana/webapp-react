import React from "react";

import { ReactComponent as ErrorIcon } from "assets/icons/inputError.svg";
import { ReactComponent as SendIcon } from "assets/icons/send.svg";

import { BoxWrapper, BoxWrapperError, LabelError, Box } from "./styles";

import { Props } from "./types";
import { defaultProps } from "./settings";

const DefaultWrapper = ({
  children,
  label,
  error,
  errorMessage,
  required,
  maxLength,
  disabled,
  width,
  height,
  sendIcon,
  ...props
}: Props): any => {
  return (
    <Box error={error}>
      <BoxWrapper
        width={width || "100%"}
        minHeight={height || 56}
        error={error}
      >
        {children}
        {error && <ErrorIcon />}
        {sendIcon && <SendIcon />}
      </BoxWrapper>
      {error && (
        <BoxWrapperError>
          <LabelError>{errorMessage}</LabelError>
        </BoxWrapperError>
      )}
    </Box>
  );
};

const InputWrapper = ({ children, ...props }: Props) => (
  <DefaultWrapper {...props}>{children}</DefaultWrapper>
);

InputWrapper.defaultProps = defaultProps;

export { InputWrapper };
