import { useTranslation } from 'react-i18next'
import { HeaderMain, Text } from './style'

const LivechatHeader = () => {
  const { t } = useTranslation()

  return (
    <HeaderMain>
      <Text>{t('page.post.live.live_chat.title')}</Text>
    </HeaderMain>
  )
}

export { LivechatHeader }
