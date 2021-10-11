import React from 'react'
import { 
  FilterButtonProps, 
  ArrowMenuProps, 
  MenuItemProps, 
  defaultProps,
  OptionsProps
} from './types'

import {
  Box, 
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem as RawMenuItem,
} from "@chakra-ui/react"

import { Text } from "../text"

import { theme } from "styles/theme"
import { ReactComponent as FilterIcon } from "assets/icons/filter.svg"

const MenuItem = ({ selected, ...props }: MenuItemProps) => (
  <RawMenuItem 
    {...props}
    style={{ 
      color: selected ? theme.colors.white : theme.colors.black,
      backgroundColor: selected ? theme.colors.blue['300'] : theme.colors.white,
      padding: theme.pxToRem(20)
    }}
  />
)

const ArrowMenu = ({ selected }: ArrowMenuProps) => (
  <Box
    position="absolute"
    right={theme.pxToRem(15)}
    top={theme.pxToRem(-9)}
    zIndex={-1}
    bgColor={selected ? theme.colors.blue['300'] : theme.colors.white}
    border={`solid ${selected ? theme.colors.blue['300'] : theme.colors.white}`}
    borderWidth={`0 3px 3px 0`}
    display="inline-block"
    padding={theme.pxToRem(8)}
    style={{ transform: "rotate(-135deg)" }}
  />
)

const FilterButton = ({ onChange, options, label }: FilterButtonProps) => {

  const [selected, setSelected] = React.useState<number | undefined>(undefined)

  React.useEffect(() => {
    if (selected === undefined || !onChange) return

    const option: OptionsProps | undefined = options && options[selected]
    option && onChange(option?.value || option)
  }, [selected])

  return (
    <Menu
      direction="rtl"
      autoSelect={false}
      closeOnSelect={false}
    >
      <MenuButton>
        <Center>
          <Box mr={2}>
            <FilterIcon />
          </Box>

          <Text fontSize={theme.pxToRem(23)} fontWeight={500}>
            { label || '' }
          </Text>
        </Center>
      </MenuButton>

      <MenuList padding={0} border="none" overflow="hidden" minW="fit-content">
        {options && options.map(({ label }, index) => (
          <MenuItem
            onClick={() => setSelected(index)}
            selected={selected === index}
          >
            { label }
            {index === 0 && <ArrowMenu selected={selected === 0} />}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
};

FilterButton.defaultProps = defaultProps

export { FilterButton }