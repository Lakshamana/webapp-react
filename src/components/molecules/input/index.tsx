import { InputInline, InputWrapper } from 'components/atoms'
import { useState } from 'react'

import { Props } from './types'

const Input = ({
  name,
  placeholder,
  value,
  type = 'text',
  onChange,
  onBlur,
  onEnterPress = () => {},
  error,
  errorMessage,
  rightIcon = '',
  inverted,
  color = '',
  background = '',
  disabled = false,
}: Props) => {
  const [showPassword, setShowPassword] = useState(type !== 'password')

  return (
    <InputWrapper
      {...{ error, errorMessage, rightIcon, type, name }}
      inverted={inverted}
      onChangeShowPassword={setShowPassword}
      {...{ onEnterPress }}
    >
      <InputInline
        {...{
          onChange,
          onBlur,
          value,
          error,
          placeholder,
          color,
          background,
          disabled,
          inverted,
          name,
        }}
        type={showPassword ? 'text' : type}
        autoComplete="off"
        onKeyDown={(e: any) => {
          if (e.keyCode === 13) {
            onEnterPress()
          }
        }}
      />
    </InputWrapper>
  )
}

export { Input }
