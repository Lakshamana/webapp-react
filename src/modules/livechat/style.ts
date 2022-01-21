import styled from "styled-components";
import { space, SpaceProps, LayoutProps } from "styled-system";
import { Icon } from "@iconify/react";

interface SpaceLayoutProps extends SpaceProps, LayoutProps { }

export const Bar = styled.div<SpaceLayoutProps>`
  ${space}
  border: 1px solid #444444;
  width: 90%;
  align-self: center;
  margin: 2.5em 0;
`;

export const OpenLivechat = styled.div`
  position: absolute;
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px 0 0 4px;
  right: 0px;
  opacity: 0.7;
  cursor: pointer;
  background: ${({ theme }) => theme.colors === 'light'
    ? theme.colors.inputBg[theme.colorMode]
    : theme.colors.cardBg[theme.colorMode]
  };
  &:hover {
    opacity: 1;
  }
`

export const IconOpen = styled(Icon)`
  color: ${({ theme }) => (theme.colors.generalText[theme.colorMode])};
`