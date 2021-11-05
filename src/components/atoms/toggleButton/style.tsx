import styled from "styled-components"
import { Switch } from "@chakra-ui/react"

export const SwitchStyled: any = styled(Switch)`
  .chakra-switch__track {
    overflow: visible;
    height: 0.6em;
    box-shadow: none !important;
  }

  .chakra-switch__thumb {
    box-shadow: 0px 1px 5px rgb(0 0 0 / 60%);
    margin-top: -15%;
  }
`;
