import styled from "styled-components";

import { color, space, layout, typography, border, variant } from "styled-system";

export const BoxButton: any = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  grid-gap: 15px;

  ${space}
  ${layout}
  ${typography}
  ${color}
  ${border}

    ${variant({
    variants: {
        primary: {
            color: 'white',
            bg: theme => `${theme.colors.brand.primary[theme.colorMode]}`,
            textTransform: 'uppercase'
        },
        secondary: {
            color: 'white',
            bg: theme => `${theme.colors.brand.secondary[theme.colorMode]}`,
            textTransform: 'uppercase'
        },
        accent: {
            color: 'white',
            bg: theme => `${theme.colors.brand.accent[theme.colorMode]}`,
            textTransform: 'uppercase'
        },
        grey: {
            color: 'white',
            bg: '#A4A4A4',
            textTransform: 'uppercase',
            cursor: 'inherit'
        },
        outlined: {
            color: theme => `${theme.colors.brand.accent[theme.colorMode]}`,
            bg: 'transparent',
            textTransform: 'uppercase'
        },
        cancel: {
            color: 'white',
            bg: 'transparent',
            textTransform: 'uppercase'
        }
    }
})}

    &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
  }
`;
