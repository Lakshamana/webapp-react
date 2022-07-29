import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { css, Global } from '@emotion/react'
import App from 'App'
import { AuthProvider } from 'contexts/auth'
import PropTypes from 'prop-types'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from 'styled-components'
import {
  breakpoints as themeBreakpoints,
  colors,
  fonts,
  globalStyles,
  metrics,
  theme
} from 'styles'

import { useEffect } from 'react'

import { ApolloProvider } from '@apollo/client'
import AccessVerificationsProvider from 'contexts/accessVerifications'
import { Client } from 'services/api'
import {
  useChannelsStore,
  useCommonStore,
  useOrganizationStore,
  useThemeStore
} from 'services/stores'

import { configEnvs } from 'config/envs'
import { initializeGTM } from 'config/gtm'

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

  useEffect(() => {
    configEnvs.googleTag && initializeGTM()
  }, [])

  return (
    <ApolloProvider client={Client}>
      <ThemeProvider theme={{ ...theme, colorMode }}>
        <ChakraProvider theme={customTheme}>
          <HelmetProvider>
            <Helmet title={pageTitleConfigured} />
            <AuthProvider>
              <Global
                styles={css`
                  ${globalStyles}
                `}
              />

              <AccessVerificationsProvider>
                <App />
              </AccessVerificationsProvider>
            </AuthProvider>
          </HelmetProvider>
        </ChakraProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

TemplateProvider.propTypes = {
  children: PropTypes.node,
}

export default TemplateProvider
