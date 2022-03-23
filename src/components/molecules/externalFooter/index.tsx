import { useTranslation } from 'react-i18next'
import { useFlags } from 'contexts/flags'
import { Logo, Text, Container, Link } from 'components/atoms'
import { BoxFooter, FooterItems, TextFooter } from './style'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks/useThumbor'
import { useOrganizationStore } from 'services/stores'

const ExternalFooter = () => {
  const { t } = useTranslation()
  const { ORGANIZATION } = useFlags()
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
    <BoxFooter display={'flex'} alignItems={'center'}>
      <FooterItems width={1} py={20}>
        <TextFooter>
          <Link
            fontSize={[16]}
            to={ORGANIZATION.TERMS_URL}
            label={t('common.terms')}
            defaultColor={true}
            isExternal
          />
          <Text mx={1} fontSize={[16]}>
            {`&`}
          </Text>
          <Link
            to={ORGANIZATION.PRIVACY_URL}
            label={t('common.privacy')}
            fontSize={[16]}
            defaultColor
            isExternal
          />
        </TextFooter>
        <Container
          marginLeft={['none', 'none', 'auto']}
          display={'block'}
          textAlign={'center'}
        >
          <Logo
            alignItems={'center'}
            justifyContent={'right'}
            ignoreFallback
            src={'https://d1k5o3ezm3npyz.cloudfront.net/61ba2606c1805142c289377f/public/footer-logo.svg'}
            mb={[6, 6, 6, 6, 0]}
            width={120}
          />
        </Container>
      </FooterItems>
    </BoxFooter>
  )
}

export { ExternalFooter }
