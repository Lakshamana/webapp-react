import styled from "styled-components";
import { color, flexbox, layout } from "styled-system";
import { breakpoints } from "styles";
import { Container } from "@chakra-ui/react";
import { Theme } from "./types";

export const BoxChatMain: any = styled.div`
  ${flexbox}
  ${layout}
  ${color}
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  @media screen and (min-width: ${breakpoints.md}) {
    padding: 8px;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    padding-top: 16px;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
  }
`;

export const AvatarContainer: any = styled.div`
  @media screen and (max-width: ${breakpoints.lg}) {
    display: none
  }
`;

export const MainContainer: any = styled.div`
  ${layout}
  ${flexbox}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${({ isOwnUser }: Pick<Theme, 'isOwnUser'>) => `
    @media screen and (min-width: ${breakpoints.lg}) {
      width: 80%;
      margin-left: ${isOwnUser ? '0' : '16px'};
      margin-right: ${isOwnUser ? '16px' : '0'};
    }
  `}
`;

export const DateContainer: any = styled.div` 
`;

export const DateText: any = styled.div`
${({ theme: { colors, colorMode } }: Theme) => `color: ${colors.livechatText[colorMode]};`}
  font-size: 12px;
  font-weight: 300;
`;

export const BoxContainer: any = styled.div`
  ${layout}
  display: flex;
  flex-direction: column;
  ${({ isOwnUser, theme: { colors, colorMode } }: Theme) => {
    const defineColor = isOwnUser ? 'me' : colorMode
    return `background: ${colors.livechatBg[defineColor]};`
  }}
  border-radius: 8px;
  padding: 12px;
  @media screen and (min-width: ${breakpoints.lg}) {
    padding: 16px;
  }
`;
export const NameUserText: any = styled.span`
  ${color}
  font-weight: bold;
  font-size: 12px;
`;

export const MessageText: any = styled.span`
  ${color}
  font-size: 14px;
  font-weight: 300;
`;

export const ContainerCustom = styled(Container)`
  max-width: 100%;
  ${({ isOwnUser }: Pick<Theme, 'isOwnUser'>) => `
    @media screen and (min-width: ${breakpoints.lg}) {
      padding-right: ${isOwnUser ? '16px' : '4px'};
      padding-left: ${isOwnUser ? '4px' : '16px'};
    }
  `}
  @media screen and (min-width: ${breakpoints.xl}) {
    max-width: 60ch;
  }
`