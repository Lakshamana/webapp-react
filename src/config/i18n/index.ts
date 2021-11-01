import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import translations from "locale"

const i18nConfig = {
	resources: translations,
	fallbackLng: "en-US",
	defaultNS: "translations",
	debug: true,
	interpolation: {
		escapeValue: false
	}
}

i18n.use(initReactI18next).init(i18nConfig)

export default i18n
