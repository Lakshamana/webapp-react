import styled from 'styled-components'
import { Switch } from '@chakra-ui/react'

export const SwitchStyled: any = styled(Switch)`
  .chakra-switch__track {
    overflow: visible;
    display: flex;
    align-items: center;
    height: ${({ size }) => (size === 'lg' ? '0.85rem' : '0.65rem')}};
    box-shadow: none !important;
  }

  .chakra-switch__track[data-checked] {
    background: ${({ theme }) => theme.colors.brand.primary[theme.colorMode]}90};
  }

  .chakra-switch__track[data-focus] {
    box-shadow: none;
  }

  .chakra-switch__thumb {
    width: ${({ size }) => (size === 'md' ? '1.3rem' : '')};
    height: ${({ size }) => (size === 'md' ? '1.3rem' : '')};
    box-shadow: 0px 1px 3px rgb(0 0 0 / 60%);
    background-color: ${({ theme, checked }) =>
      checked
        ? theme.colors.brand.primary[theme.colorMode]
        : theme.colors.grey[100]} !important;
  }
`
