import styled from "styled-components";
import { StyledProps } from "./types";
import { breakpoints, colors } from "styles";
import { layout } from "styled-system";

export const ChannelsContent = styled.div<StyledProps>`
 
  display: flex;
  width: 100%;
  padding-top: 56.25%;
  height: auto;
  position: relative;
  border-radius: 4px;
  ${({ image }: StyledProps) => `background: url('${image}');`}
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
   ${layout}
`;

export const ExclusiveBlocked: any = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 51px;
  height: 50px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.blue["300"]};

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 41px;
    height: 40px;
  }
`;

export const GeolockedBlocked: any = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 51px;
  height: 50px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.blue["300"]};
  pointer-events: none;

  @media screen and (max-width: ${breakpoints.sm}) {
    width: 41px;
    height: 40px;
  }
`;
