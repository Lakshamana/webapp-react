import { useTranslation } from 'react-i18next'
import { Logo, Text, Container, Link } from 'components/atoms'
import { useThemeStore } from 'services/stores/theme'
import { BoxFooter, FooterItems, TextFooter } from './style'
import { colors } from 'styles'

const ExternalFooter = () => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
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
        <Container
          marginLeft={['none', 'none', 'auto']}
          display={'block'}
          textAlign={'center'}
        >
          <Text
            fontSize={14}
            kind={'subheading'}
            color={colors.secondaryText[colorMode]}
          >
            {' '}
            Powered by{' '}
          </Text>
          <Logo
            alignItems={'center'}
            justifyContent={'right'}
            mb={[4, 4, 0, 0]}
            width={161}
            height={44}
          />
        </Container>
      </FooterItems>
    </BoxFooter>
  )
}

export { ExternalFooter }
