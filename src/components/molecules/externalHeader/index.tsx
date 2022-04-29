import { useMediaQuery } from '@chakra-ui/media-query'
import { Box } from '@chakra-ui/layout'
import { useCustomizationStore, useThemeStore } from 'services/stores'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { Logo, LanguageSelector, Container } from 'components'
import { ExternalHeaderProps } from './types'
import { BoxHeader, HeaderItems } from './style'
import { breakpoints } from 'styles'

const ExternalHeader = ({
  rightContent,
  rightContentStyle,
}: ExternalHeaderProps) => {
  const { organizationConfig } = useCustomizationStore()
  const { colorMode } = useThemeStore()
  const { generateImage } = useThumbor()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

  const generateOrgLogo = () => {
    const theme = colorMode.toUpperCase()
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
          ignoreFallback
          maxWidth={isDesktop ? '180px' : '120px'}
          marginRight={[3, 4]}
          py={20}
          src={generateOrgLogo()}
        ></Logo>
        <Box marginLeft={'auto'}>
          <LanguageSelector></LanguageSelector>
        </Box>
        <Container {...rightContentStyle}>
          {rightContent && rightContent()}
        </Container>
      </HeaderItems>
    </BoxHeader>
  )
}

export { ExternalHeader }
