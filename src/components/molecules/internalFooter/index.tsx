import { Logo, Text, Link } from 'components/atoms'
import { useTranslation } from 'react-i18next'
import { useFlags } from 'contexts/flags'
import { BoxFooter, FooterItems, TextFooter } from './style'

const InternalFooter = () => {
  const { t } = useTranslation()
  const { ORGANIZATION } = useFlags()

  return (
    <BoxFooter display={'flex'} alignItems={'center'}>
      <FooterItems width={1} py={20}>
        <TextFooter>
          <Link
            fontSize={[16]}
            to={ORGANIZATION.TERMS_URL!}
            label={t('common.terms')}
            defaultColor
            isExternal
          />
          <Text mx={1} fontSize={[16]}>
            {`&`}
          </Text>
          <Link
            to={ORGANIZATION.PRIVACY_URL!}
            label={t('common.privacy')}
            fontSize={[16]}
            defaultColor
            isExternal
          />
        </TextFooter>
        <Logo
          alignItems={'center'}
          justifyContent={'right'}
          marginLeft={['none', 'none', 'none', 'none', 'auto']}
          mb={[6, 6, 6, 6, 0]}
          width={120}
          src={
            'https://d1k5o3ezm3npyz.cloudfront.net/61ba2606c1805142c289377f/public/footer-logo.svg'
          }
          ignoreFallback
        />
      </FooterItems>
    </BoxFooter>
  )
}

export { InternalFooter }
