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
`;

export const DateContainer: any = styled.div` 
`;

export const NameUserText: any = styled.div`
${({ theme: { colors, colorMode } }: Theme) => `color: ${colors.livechatText[colorMode]};`}
  font-size: 12px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: ${ ({ isOwnUser }: Theme) => (isOwnUser ? 'flex-end' : 'flex-start') };
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
  min-height: 0;
`;

export const MessageText: any = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: ${ ({ isOwnUser }: Theme) => (isOwnUser ? "#fff" : "#444") };
  text-align: ${ ({ isOwnUser }: Theme) => (isOwnUser ? "end" : "start") };
`;

export const ContainerCustom = styled(Container)`
  max-width: 100%;
  padding: 0;
  gap: 12px;
`