import { useTranslation } from "react-i18next"

export const Translate = (text: string) => {
    const { t } = useTranslation()
    return t(text)
}
