import styled, { css } from "styled-components";
import { layout, LayoutProps } from "styled-system";

interface PropsContainer extends LayoutProps {
  open: boolean;
}

export const Parent = styled.div<PropsContainer>`
  ${layout}
  cursor: pointer;
  :before,
  :after,
  div {
    background: ${({ theme }) => theme.colors.burgerMenu[theme.colorMode]};
    content: "";
    display: block;
    height: 4px;
    border-radius: 3px;
    margin: 3px 0;
    transition: 0.5s;
  }
  ${({ open }) =>
    open
      ? css`
          :before {
            margin: 8px 0;
            transform: translateY(12px) rotate(135deg);
          }
          :after {
            margin: 8px 0;
            transform: translateY(-12px) rotate(-135deg);
          }
          div {
            margin: 8px 0;
            height: 4px;
            transform: scale(0);
          }
        `
      : ""}
`;
