import styled from "styled-components";

export const ChannelsContent: any = styled.div`
position: relative;
    width: 320px;
    height: 170px;
    margin-left: 80px;
    border-radius: 4px;
    ${({ image }: any) => `background: ${image};`}
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ChannelBlocked: any = styled.div`
    width: 51px;
    height: 50px;
    border-radius: 50%;
    position: inherit;
    top: 60px;
    margin: 0 auto;
    background-color: #035EFB;
`;
