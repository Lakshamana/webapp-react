import { Box } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { useCustomizationStore, useThemeStore } from 'services/stores'
import { Logo, UserInfo, Container } from 'components'
import { BoxHeader, HeaderItems } from './style'
import { breakpoints } from 'styles'
import { LanguageSelector } from 'components/atoms'

const EmptyHeader = () => {
  const { organizationConfig } = useCustomizationStore()
  const { generateImage } = useThumbor()

  const { colorMode, toggleColorMode } = useThemeStore()

  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

  const orgLogo = generateImage(
    ThumborInstanceTypes.IMAGE,
    organizationConfig?.IMAGES?.LOGO || '',
    {
      size: { height: 80 },
    }
  )

  return (
    <BoxHeader display="flex" alignItems="center" justifyContent="center">
      <HeaderItems>
        <Logo
          maxWidth={isDesktop ? '180px' : '120px'}
          marginRight={[3, 4]}
          py={20}
          src={orgLogo}
          ignoreFallback
        ></Logo>
        <Box marginLeft={'auto'} mr={3}>
          <LanguageSelector></LanguageSelector>
        </Box>
        <Container>
          <UserInfo display={'menu'} {...{ colorMode, toggleColorMode }} />
        </Container>
      </HeaderItems>
    </BoxHeader>
  )
}

export { EmptyHeader }
