import { SelectProps as SelectPackageProps } from '@chakra-ui/react'

type Option = {
  value: any
  label: string
}

export interface SelectProps extends SelectPackageProps {
  spacing?: any
  font?: any
  options: Array<Option>
  defaultValue?: any
}

export interface OptionsProps {
  options: Array<Option>
}
