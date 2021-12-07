import { Logo, Text, Link } from 'components/atoms'
import { useTranslation } from 'react-i18next'
import { BoxFooter, FooterItems, TextFooter } from './style'

const InternalFooter = () => {
  const { t } = useTranslation()
  return (
    <BoxFooter display={'flex'} alignItems={'center'}>
      <FooterItems width={1} py={20}>
        <TextFooter>
          <Link
            fontSize={[16]}
            externalLink={'https://fanhero.com/terms/en/'}
            label={t('common.terms')}
            defaultColor
          />
          <Text mx={1} fontSize={[16]}>
            &
          </Text>
          <Link
            externalLink={'https://fanhero.com/privacy/en/'}
            label={t('common.privacy')}
            fontSize={[16]}
            defaultColor
          />
        </TextFooter>
        <Logo
          alignItems={'center'}
          justifyContent={'right'}
          marginLeft={['none', 'none', 'auto']}
          mb={[4, 4, 0, 0]}
          width={161}
          height={44}
        />
      </FooterItems>
    </BoxFooter>
  )
}

export { InternalFooter }
