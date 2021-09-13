import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import propStyledSystem from '@styled-system/prop-types'
import CharsCounter from '@components/atoms/charsCounter'
import InputLabel from '@components/atoms/inputLabel'

import {
  Wrapper,
  ChildrenWrapper,
  BoxWrapper,
  Label,
  BottomLabel,
  RequiredIndicator,
} from './styles'

const errorExists = (error, label) =>
  (!!error && typeof error === 'string') || !!label

const DefaultWrapper = ({
  children,
  label,
  error,
  bottomLabel,
  bottomLabelColor,
  required,
  maxLength,
  withCounter,
  totalChars,
  ...props
}) => {

  const hasErrorMessage = useMemo(() => !!error && typeof error === 'string', [error])

  return (
    <>
      {label && (
        <InputLabel
          fontSize={[14, 14, 16]}
          pb={1}
          error={!!error}
          disabled={props.disabled}
        >
          {label || ''}
          {required && <RequiredIndicator>*</RequiredIndicator>}
        </InputLabel>
      )}
      <BoxWrapper
        error={!!error}
        {...props}
        width={props.width || '95%'}
        height={props.height || 35}
      >
        {children}
      </BoxWrapper>
      {errorExists(error, bottomLabel) && (
        <BottomLabel fontSize={12} bottomLabelColor={bottomLabelColor}>
          <>
            {`${hasErrorMessage ? error : bottomLabel || ''}`}
            {withCounter && maxLength && Number.isFinite(totalChars) && (
              <CharsCounter max={maxLength} actual={totalChars} />
            )}
          </>
        </BottomLabel>
      )}
    </>
  )
}

const InlineWrapper = ({ children, label, error, required, ...props }) => (
  <Wrapper error={!!error} py={1} {...props} width={props.width || '95%'}>
    {(label || (!!error && typeof error === 'string')) && (
      <Label fontSize={[14, 14, 16]} pb={2} error={!!error}>
        {`${`${label || ''} `}${!!error ? `(${error})` : ''}`}
        {required && <RequiredIndicator>*</RequiredIndicator>}
      </Label>
    )}
    <ChildrenWrapper>{children}</ChildrenWrapper>
  </Wrapper>
)

const InputWrapper = ({ children, kind, ...props }) =>
  kind === 'box' ? (
    <DefaultWrapper {...props}>{children}</DefaultWrapper>
  ) : (
    <InlineWrapper {...props}>{children}</InlineWrapper>
  )

InputWrapper.defaultProps = {
  kind: 'box',
  bottomLabelColor: '#909090',
  hasBottomLine: true,
  border: '1px solid #eaebeb',
}

InputWrapper.propTypes = {
  ...propStyledSystem.space,
  ...propStyledSystem.layout,
  children: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  kind: PropTypes.oneOf(['default', 'box']),
  bgColor: PropTypes.string,
  noPadding: PropTypes.bool,
  customIdent: PropTypes.string,
  full: PropTypes.bool,
  bottomLabel: PropTypes.string,
  bottomLabelColor: PropTypes.string,
  hasBottomLine: PropTypes.bool,
  maxLength: PropTypes.number,
  withCounter: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default InputWrapper
