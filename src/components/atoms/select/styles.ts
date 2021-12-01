import styled from 'styled-components'
import { StyleContainer } from 'components/atoms'

export const SelectContainer = styled(StyleContainer)`
  display: flex;
  select {
    :hover,
    :focus {
      box-shadow: unset;
      border-color: ${({ theme }) => theme.colors.selectBg[theme.colorMode]};
    }
  }
  option {
    background-color: ${({ theme }) => theme.colors.selectBg[theme.colorMode]};
    :hover {
      box-shadow: 0 0 10px 100px #1882a8 inset;
    }
  }
`
