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
import { AuthProvider } from '../authProvider'
import { ThemeProvider } from 'styled-components'
import { useThemeStore } from 'services/stores/theme'
import FlagsProvider from 'config/firebase/FlagsProvider'

const breakpoints = createBreakpoints(themeBreakpoints)

const TemplateProvider = ({ children }: any) => {
  const { colorMode } = useThemeStore()

  const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

  const customTheme = extendTheme({
    ...theme,
    ...metrics,
    fonts,
    breakpoints,
    config,
    colors,
  })

  return (
    <ThemeProvider
      theme={{ ...theme, colorMode, darkMode: colorMode === 'dark' }}
    >
      <ChakraProvider theme={customTheme}>
        <FlagsProvider>
          <BreakpointProvider>
            <Global
              styles={css`
                ${globalStyles}
              `}
            />
            <AuthProvider>{children}</AuthProvider>
          </BreakpointProvider>
        </FlagsProvider>
      </ChakraProvider>
    </ThemeProvider>
  )
}

TemplateProvider.propTypes = {
  children: PropTypes.node,
}

export { TemplateProvider }
