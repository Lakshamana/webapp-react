import { Container, Link, Text } from 'components/atoms'
import { useTranslation } from 'react-i18next'
import { useCustomizationStore } from 'services/stores'
import { FooterLogo } from '../footerLogo'
import { BoxFooter, FooterItems, TextFooter } from './style'

const ExternalFooter = () => {
  const { t } = useTranslation()
  const { organizationConfig } = useCustomizationStore()

  return (
    <BoxFooter display={'flex'} alignItems={'center'}>
      <FooterItems width={1} py={10}>
        <TextFooter>
          <Link
            fontSize={[16]}
            to={organizationConfig?.TERMS_URL!}
            label={t('common.terms')}
            defaultColor={true}
            isExternal
          />
          <Text mx={1} fontSize={[16]}>
            {`&`}
          </Text>
          <Link
            to={organizationConfig?.PRIVACY_URL!}
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
          <FooterLogo />
        </Container>
      </FooterItems>
    </BoxFooter>
  )
}

export { ExternalFooter }
