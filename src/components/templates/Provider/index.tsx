import React from 'react'
import PropTypes from 'prop-types'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { Global, css } from '@emotion/react'
import {
  colors,
  metrics,
  fonts,
  globalStyles,
  theme,
  breakpoints as themeBreakpoints,
} from 'styles'
import { BreakpointProvider } from 'services/hooks'
import { AuthProvider } from '../AuthProvider'

const breakpoints = createBreakpoints(themeBreakpoints)

const customTheme = extendTheme({
  colors,
  ...theme,
  ...metrics,
  fonts,
  breakpoints,
})

const Provider = ({ children }: any ) => (
  <ChakraProvider theme={customTheme}>
    <BreakpointProvider>
      <Global
        styles={css`
          ${globalStyles}
        `}
      />
      <AuthProvider>{children}</AuthProvider>
    </BreakpointProvider>
  </ChakraProvider>
)

Provider.propTypes = {
  children: PropTypes.node,
}

export { Provider }
