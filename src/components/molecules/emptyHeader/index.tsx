import { Box } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Container, Logo, UserInfo } from 'components'
import { LanguageSelector } from 'components/atoms'
import { useHistory } from 'react-router-dom'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { useCustomizationStore, useThemeStore } from 'services/stores'
import { breakpoints } from 'styles'
import { BoxHeader, HeaderItems } from './style'

const EmptyHeader = () => {
  const { organizationConfig } = useCustomizationStore()
  const { generateImage } = useThumbor()
  const history = useHistory()

  const { colorMode, toggleColorMode } = useThemeStore()

  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

  const generateOrgLogo = () => {
    const theme = colorMode?.toUpperCase()
    if (!organizationConfig?.IMAGES?.ORGANIZATION_LOGO) return ''
    return generateImage(
      ThumborInstanceTypes.IMAGE,
      organizationConfig?.IMAGES?.ORGANIZATION_LOGO[theme],
      {
        size: { height: 80 },
      }
    )
  }

  return (
    <BoxHeader display="flex" alignItems="center" justifyContent="center">
      <HeaderItems>
        <Logo
          maxWidth={isDesktop ? '180px' : '120px'}
          marginRight={[3, 4]}
          py={20}
          src={generateOrgLogo()}
          clickable
          ignoreFallback
          onClick={() => history.push('/')}
        />
        <Box marginLeft={'auto'} mr={3}>
          <LanguageSelector />
        </Box>
        <Container>
          <UserInfo display={'menu'} {...{ colorMode, toggleColorMode }} />
        </Container>
      </HeaderItems>
    </BoxHeader>
  )
}

export { EmptyHeader }
