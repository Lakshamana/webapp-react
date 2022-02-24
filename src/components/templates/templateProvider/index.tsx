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
import { AuthProvider } from 'contexts/auth'
import { FlagsProvider } from 'contexts/flags'
import { ThemeProvider } from 'styled-components'
import { useThemeStore } from 'services/stores/theme'

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
      theme={{ ...theme, colorMode}}
    >
      <ChakraProvider theme={customTheme}>
        <FlagsProvider>
          <Global
            styles={css`
              ${globalStyles}
            `}
          />
          <AuthProvider>{children}</AuthProvider>
        </FlagsProvider>
      </ChakraProvider>
    </ThemeProvider>
  )
}

TemplateProvider.propTypes = {
  children: PropTypes.node,
}

export { TemplateProvider }
