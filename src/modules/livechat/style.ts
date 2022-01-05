import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import { space, layout, SpaceProps, LayoutProps } from "styled-system";

interface SpaceLayoutProps extends SpaceProps, LayoutProps {}

export const Reaction = styled.div<SpaceLayoutProps>`
  ${space}
  ${layout}
  display: flex;
  border-radius: 5px;
  background-color: #444444;
  color: white;
  cursor: pointer;
  align-items: center;
`;

export const Bar = styled.div<SpaceLayoutProps>`
  ${space}
  border: 1px solid #444444;
  width: 90%;
  align-self: center;
  margin: 2.5em 0;
`;

export const BoxCustom = styled(Box)`
  background-color: ${({ theme }) => {
    if(theme.colorMode==='dark') {
      return theme.colors.search.result[theme.colorMode];
    }
    return theme.colors.search.section[theme.colorMode];
  }};
`