import styled from "styled-components";
import { color, flexbox, layout } from "styled-system";

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

`;

export const MainContainer: any = styled.div`
  ${layout}
  ${flexbox}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const DateContainer: any = styled.div`
  margin-left: 16px;
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
  padding: 16px;
  border-radius: 8px;
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