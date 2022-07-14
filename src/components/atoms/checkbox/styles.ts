import { Checkbox } from '@chakra-ui/react'
import styled from 'styled-components'

export const CheckboxStyled = styled(Checkbox)`
  display: flex;

  .chakra-checkbox__control {
    color: ${({ theme }) => theme.colors.generalText[theme.colorMode]};
  }


  .chakra-checkbox__control[data-checked] {
    background: ${({ theme }) => theme.colors.brand.indicator[theme.colorMode]};
    border: none;
  }

  .chakra-checkbox__control[data-checked]:hover {
    background: ${({ theme }) => theme.colors.brand.indicator[theme.colorMode]};
    opacity: 0.9;
    border: none;
  }
`
