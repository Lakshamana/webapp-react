import { memo } from 'react'
import { Select as SelectComponent } from '@chakra-ui/react'

import { useThemeStore } from 'services/stores/theme'
import { SelectProps, OptionsProps } from './types'

import { SelectContainer } from './styles'
import { colors } from 'styles'

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

const Select = ({ options, ...props }: SelectProps) => {
  const { colorMode } = useThemeStore()

  return (
    <SelectContainer>
      <SelectComponent
        bg={colors.selectBg[colorMode]}
        borderColor={colors.selectBg[colorMode]}
        color={colors.selectText[colorMode]}
        {...props}
      >
        <OptionList {...{ options }} />
      </SelectComponent>
    </SelectContainer>
  )
}

export { Select }
