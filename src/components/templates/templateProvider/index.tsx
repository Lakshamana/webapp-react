import PropTypes from 'prop-types'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { Helmet } from 'react-helmet'
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
import {
  useThemeStore,
  useChannelsStore,
  useOrganizationStore,
} from 'services/stores'
import { useCommonStore } from 'services/stores'
import AccessVerificationsProvider from 'contexts/accessVerifications'

const breakpoints = createBreakpoints(themeBreakpoints)

const TemplateProvider = ({ children }: any) => {
  const { colorMode } = useThemeStore()
  const { activeChannel } = useChannelsStore()
  const { organization } = useOrganizationStore()
  const { pageTitle } = useCommonStore()

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

  const areaName = activeChannel?.name || organization?.name || ''
  const pageTitleConfigured = `${[pageTitle, areaName]
    .filter((x) => x)
    .join(' - ')}`

  return (
    <ThemeProvider theme={{ ...theme, colorMode }}>
      <Helmet title={pageTitleConfigured} />
      <ChakraProvider theme={customTheme}>
        <FlagsProvider>
          <Global
            styles={css`
              ${globalStyles}
            `}
          />
          <AuthProvider>
            <AccessVerificationsProvider>
              {children}
            </AccessVerificationsProvider>
          </AuthProvider>
        </FlagsProvider>
      </ChakraProvider>
    </ThemeProvider>
  )
}

TemplateProvider.propTypes = {
  children: PropTypes.node,
}

export { TemplateProvider }
