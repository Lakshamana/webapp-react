import { Box } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { useOrganizationStore, useThemeStore } from 'services/stores'
import { Logo, UserInfo, Container } from 'components'
import { BoxHeader, HeaderItems } from './style'
import { breakpoints } from 'styles'
import { LanguageSelector } from 'components/atoms'

const EmptyHeader = () => {
  const { organization } = useOrganizationStore()
  const { generateImage } = useThumbor()

  const { colorMode, toggleColorMode } = useThemeStore()

  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

  const org_logo = generateImage(
    ThumborInstanceTypes.IMAGE,
    organization?.customization?.logo,
    {
      size: { height: 80 },
    }
  )

  return (
    <BoxHeader display="flex" alignItems="center" justifyContent="center">
      <HeaderItems>
        <Logo
          width={isDesktop ? '180px' : '120px'}
          marginRight={[3, 4]}
          py={20}
          src={org_logo}
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
