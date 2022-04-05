import { Logo, LanguageSelector, Container } from 'components'
import { Box } from '@chakra-ui/layout'
import { ExternalHeaderProps } from './types'
import { BoxHeader, HeaderItems } from './style'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { useFlags } from 'contexts/flags'

const ExternalHeader = ({
  rightContent,
  rightContentStyle,
}: ExternalHeaderProps) => {
  const { ORGANIZATION } = useFlags()
  const { generateImage } = useThumbor()

  const orgLogo = () => {
    if (!ORGANIZATION.IMAGES?.LOGO) return ''
    return generateImage(
      ThumborInstanceTypes.IMAGE,
      ORGANIZATION.IMAGES?.LOGO,
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
          width={180}
          marginRight={[3, 4]}
          py={20}
          src={orgLogo()}
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
