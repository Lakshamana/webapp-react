import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { USER_LOCALE } from 'config/constants'
import translations from 'locale'

const localeSet = localStorage.getItem(USER_LOCALE)

const i18nConfig = {
  resources: translations,
  fallbackLng: localeSet || 'en-US',
  defaultNS: 'translations',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
}

i18n.use(initReactI18next).init(i18nConfig)

export default i18n
