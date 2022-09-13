import { Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useCustomizationStore, useThemeStore } from 'services/stores'

import CookieConsent from 'react-cookie-consent'

import { colors } from 'styles'

const Cookie = () => {
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  const { organizationConfig } = useCustomizationStore()

  return (
    <CookieConsent
      style={{
        background: colors.headerBg[colorMode],
        color: colors.generalText[colorMode],
        padding: '20px 10px',
        alignItems: 'center',
        textAlign: 'center',
      }}
      buttonStyle={{
        background: colors.brand.primary[colorMode],
        padding: '0 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        height: '56px',
        color: 'white',
        borderRadius: '6px',
      }}
      buttonText={t('cookieConsent.accept')}
    >
      <Text>
        <>
          {t('cookieConsent.description_1')}
          <a
            style={{
              color: colors.brand.action_link[colorMode],
              padding: '0 5px',
            }}
            href={organizationConfig?.PRIVACY_URL}
            target="_blank"
            rel="noreferrer"
          >
            {t('cookieConsent.link')}
          </a>
          {t('cookieConsent.description_2')}
        </>
      </Text>
    </CookieConsent>
  )
}

export { Cookie }
