import { useState } from 'react'
import { InputInline, InputWrapper } from 'components/atoms'

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
  inverted = false,
  color = '',
  background = '',
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
        {...{ onChange, onBlur, value, error, placeholder, color, background }}
        name={name}
        type={showPassword ? 'text' : type}
        inverted={inverted}
        autocomplete="off"
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
