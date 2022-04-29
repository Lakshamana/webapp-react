import { Select } from '@chakra-ui/react'
import styled from 'styled-components'

export const SelectCustom = styled(Select)`
  border-radius: 4px;
  border: none;
  height: 56px;
  background-color: ${({ theme })=> (theme.colors.inputBg[theme.colorMode])};
  color: ${({ theme }) => theme.colors.secondaryText.dark};
  margin-bottom: 8px;
  :hover,
  :focus {
    box-shadow: unset;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.inputText[theme.colorMode]};
    font-size: 1.08rem;
    opacity: 0.5;
  }
  option {
    background-color: ${({ theme }) => theme.colors.selectBg[theme.colorMode]};
    :hover {
      box-shadow: 0 0 10px 100px #1882a8 inset;
    }
  }
`