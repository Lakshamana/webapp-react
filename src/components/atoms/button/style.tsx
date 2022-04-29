import { Button } from '@chakra-ui/react'
import { variant } from 'styled-system'
import { Props } from './types'
import styled from 'styled-components'

export const ButtonStyled: any = styled(Button)<Props>`
  background-position: center;
  transition: background 0.4s;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  padding: 0px 20px;
  ${(props) => (props.size === 'sm' ? 'font-size: 14px' : '')};

  &:focus {
    box-shadow: none;
  }

  &:hover {
    background: ${(props) => props.backgroundColor};
    opacity: 0.9;
  }

  ${variant({
    variants: {
      solid: {
        color: 'white',
        boxShadow: '8px 8px 25px rgba(0, 0, 0, 0.15)',
        bg: (theme) => `${theme.colors.brand.primary[theme.colorMode]}`,
        '&:hover': {
          opacity: '0.95',
          bg: (theme) => `${theme.colors.brand.primary[theme.colorMode]}`,
        },
        '&:disabled': {
          backgroundColor: '#a4a4a4',
          color: 'white',
          opacity: '1',

          '&:hover': {
            bg: '#a4a4a4',
          },
        },
      },
      outline: {
        color: (theme) => `${theme.colors.brand.primary[theme.colorMode]}`,
        borderColor: (theme) =>
          `${theme.colors.brand.primary[theme.colorMode]}`,
        '&:hover': {
          opacity: '0.95',
          background: 'none',
        },
        '&:disabled': {
          background: 'none',
          color: '#a4a4a4',
          borderColor: '#a4a4a4',
          opacity: '0.95',

          '&:hover': {
            color: '#a4a4a4',
            borderColor: '#a4a4a4',
          },
        },
      },
      ghost: {
        color: (theme) => `${theme.colors.generalText[theme.colorMode]}`,
        '&:hover': {
          background: 'none',
        },
        '&:disabled': {
          '&:hover': {
            opacity: '0.4',
          },
        },
      },
      link: {
        padding: 0,
        color: (theme) => `${theme.colors.brand.action_link[theme.colorMode]}`,
        '&:disabled': {
          '&:hover': {
            opacity: '0.4',
          },
        },
      },
      unstyled: {
        '&:disabled': {
          opacity: '0.9',
          '&:hover': {
            opacity: '0.5',
          },
        },
      },
    },
  })}
`
