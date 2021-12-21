import styled from "styled-components";
import { color, flexbox, layout } from "styled-system";
import { breakpoints } from "styles";

export const BoxChatMain: any = styled.div`
  ${flexbox}
  ${layout}
  ${color}
  padding: 16px;
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
  @media screen and (min-width: ${breakpoints.lg}) {
    width: 80%;
  }
`;

export const DateContainer: any = styled.div`
  @media screen and (min-width: ${breakpoints.lg}) {
    margin-left: 16px;
  }
`;

export const DateText: any = styled.div`
  color: #e1e1e1;
  font-size: 12px;
  font-weight: 300;
`;

export const BoxContainer: any = styled.div`
  ${layout}
  display: flex;
  flex-direction: column;
  ${({ isOwnUser }: any) => `background: ${isOwnUser ? "#0660F9" : "#fff"};`}
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