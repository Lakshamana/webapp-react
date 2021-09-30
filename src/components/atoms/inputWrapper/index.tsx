import React, { useMemo } from "react";

import InputLabel from "components/atoms/inputLabel";

import {
  Wrapper,
  ChildrenWrapper,
  BoxWrapper,
  Label,
  BottomLabel,
  RequiredIndicator,
} from "./styles";

import { Props } from "./types";
import { defaultProps } from "./settings";

const errorExists = (error: any | boolean, label: any) =>
  (!!error && typeof error === "string") || !!label;

const DefaultWrapper = ({
  children,
  label,
  error,
  bottomLabel,
  bottomLabelColor,
  required,
  maxLength,
  disabled,
  width,
  height,
  ...props
}: Props): any => {
  const hasErrorMessage = useMemo(
    () => !!error && typeof error === "string",
    [error]
  );

  return (
    <>
      {label && (
        <InputLabel
          fontSize={[14, 14, 16]}
          pb={1}
          // error={!!error}
          disabled={disabled}
        >
          {label || ""}
          {required && <RequiredIndicator>*</RequiredIndicator>}
        </InputLabel>
      )}
      <BoxWrapper width={width || "95%"} height={height || 35}>
        {children}
      </BoxWrapper>
      {errorExists(error, bottomLabel) && (
        <BottomLabel fontSize={12} bottomLabelColor={bottomLabelColor}>
          <>{`${hasErrorMessage ? error : bottomLabel || ""}`}</>
        </BottomLabel>
      )}
    </>
  );
};

const InlineWrapper = ({ children, label, error, required, width }: Props) => (
  <Wrapper py={1} width={width || "95%"}>
    {(label || (!!error && typeof error === "string")) && (
      <Label fontSize={[14, 14, 16]} pb={2} error={!!error}>
        {`${`${label || ""} `}${!!error ? `(${error})` : ""}`}
        {required && <RequiredIndicator>*</RequiredIndicator>}
      </Label>
    )}
    <ChildrenWrapper>{children}</ChildrenWrapper>
  </Wrapper>
);

const InputWrapper = ({ children, kind, ...props }: Props) =>
  kind === "box" ? (
    <DefaultWrapper {...props}>{children}</DefaultWrapper>
  ) : (
    <InlineWrapper {...props}>{children}</InlineWrapper>
  );

InputWrapper.defaultProps = defaultProps;

export default InputWrapper;
