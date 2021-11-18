import styled from "styled-components"
import { Switch } from "@chakra-ui/react"

export const SwitchStyled: any = styled(Switch)`
  .chakra-switch__track {
    overflow: visible;
    height: 0.4em;
    box-shadow: none !important;
    background-color: ${({ theme, checked }) => 
      theme.darkMode
        ? theme.colors.grey[checked ? 800 : 700]
        : checked ? theme.colors.purple[200] : theme.colors.grey[250]
      } !important;
  }

  .chakra-switch__thumb {
    margin-top: -16%;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 60%);
    background-color: ${({ theme, checked }) => 
      theme.darkMode
        ? checked ? theme.colors.blue[300] : theme.colors.grey[650]
        : checked ? theme.colors.purple[100] : theme.colors.grey[100]
      } !important;
  }
`;
