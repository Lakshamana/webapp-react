import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores/theme'
import { HeaderMain, Text } from './style'
import { colors } from 'styles'

const LivechatHeader = () => {
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()

  return (
    <HeaderMain>
      <Icon
        icon={'mdi:message'}
        width="20px"
        height="20px"
        color={colors.generalText[colorMode]}
      />
      <Text>{t('page.post.live.live_chat.title')}</Text>
    </HeaderMain>
  )
}

export { LivechatHeader }
