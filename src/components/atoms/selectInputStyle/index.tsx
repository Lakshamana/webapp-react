import { memo } from 'react'

import { SelectProps, OptionsProps } from './types'

import { SelectCustom } from './styles'

const Options = ({ options }: OptionsProps) => (
  <>
    {options?.map((option) => (
      <option key={`${option.value}-option`} value={option.value}>
        {option.label}
      </option>
    ))}
  </>
)

const OptionList = memo(Options)

const SelectInputStyle = ({ options, ...props }: SelectProps) => {

  return (
    <SelectCustom {...props}>
      <OptionList {...{ options }} />
    </SelectCustom>
  )
}

export { SelectInputStyle }
