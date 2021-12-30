import { Logo, LanguageSelector, Container } from 'components'
import { Box } from '@chakra-ui/layout'
import { ExternalHeaderProps } from './types'
import { BoxHeader, HeaderItems } from './style'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks/useThumbor'
import { useOrganizationStore } from 'services/stores'

const ExternalHeader = ({
  rightContent,
  rightContentStyle,
}: ExternalHeaderProps) => {
  const { organization } = useOrganizationStore()
  const { generateImage } = useThumbor()
  const org_logo = generateImage(
    ThumborInstanceTypes.IMAGE,
    organization?.customization.logo,
    {
      size: { height: 80 },
    }
  )

  return (
    <BoxHeader display="flex" alignItems="center" justifyContent="center">
      <HeaderItems>
        <Logo
          ignoreFallback
          width={180}
          marginRight={[3, 4]}
          py={20}
          src={org_logo}
        ></Logo>
        <Box marginLeft={'auto'}>
          <LanguageSelector></LanguageSelector>
        </Box>
        <Container {...rightContentStyle}>
          {rightContent ? rightContent() : <></>}
        </Container>
      </HeaderItems>
    </BoxHeader>
  )
}

export { ExternalHeader }
