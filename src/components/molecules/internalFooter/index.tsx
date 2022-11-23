import { Link, Text } from 'components/atoms'
import { useTranslation } from 'react-i18next'
import { useCustomizationStore } from 'services/stores'
import { FooterLogo } from '../footerLogo'
import { BoxFooter, FooterItems, TextFooter } from './style'

const InternalFooter = () => {
  const { t } = useTranslation()
  const { organizationConfig } = useCustomizationStore()

  return (
    <BoxFooter display={'flex'} alignItems={'center'}>
      <FooterItems width={1} py={20}>
        <TextFooter>
          <Link
            fontSize={[16]}
            to={organizationConfig?.TERMS_URL!}
            label={t('common.terms')}
            defaultColor
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
        <FooterLogo />
      </FooterItems>
    </BoxFooter>
  )
}

export { InternalFooter }
