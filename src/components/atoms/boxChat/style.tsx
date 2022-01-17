import styled from "styled-components";
import { color, flexbox, layout } from "styled-system";
import { breakpoints } from "styles";
import { Container } from "@chakra-ui/react";
import { Theme } from "./types";
import { Avatar } from "../avatar";

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

export const AvatarCustom = styled(Avatar)`
  width: 36px;
  height: 36px;
`

export const MainContainer: any = styled.div`
  ${layout}
  ${flexbox}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
`;
export const NameUserText: any = styled.span`
  ${color}
  font-weight: bold;
  font-size: 11px;
`;

export const MessageText: any = styled.span`
  ${color}
  font-size: 11px;
  font-weight: 300;
`;

export const ContainerCustom = styled(Container)`
  max-width: 100%;
  padding: 0;
  gap: 12px;
`