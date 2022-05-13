import { MainChatBody } from './style'
import { Icon } from '@iconify/react'
import { Text } from 'components'
import { Props } from './types'
import { formatDistance } from 'date-fns'
import { useRef, useEffect } from 'react'
import { useThemeStore } from 'services/stores'
import { useTranslation } from 'react-i18next'
import { BoxChat } from '../boxChat'
import { useAuthStore } from 'services/stores'
import { Center } from '@chakra-ui/layout'
import { colors } from 'styles'

const LivechatBody = ({ messages, enabled }: Props) => {
  const { account } = useAuthStore()
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()

  const messagesEndRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    })
  }, [messages])

  const convertData = (data) => {
    const date = new Date(data.seconds * 1000)
    return formatDistance(new Date(), date, {
      includeSeconds: true,
    })
  }

  if (!enabled)
    return (
      <Center color={colors.secondaryText[colorMode]} flexDirection={'column'}>
        <Icon width={60} icon="mdi:message-bulleted-off" />
        <Text fontSize={'1rem'} mt={2} fontWeight="bolder">
          {t('common.disabled_chat')}
        </Text>
      </Center>
    )

  return (
    <MainChatBody>
      {messages?.map((e) => (
        <BoxChat
          key={e.id}
          isOwnUser={e.userId === account?.id}
          username={e.username}
          date={convertData(e.dateAdded)}
          message={e.text}
          avatarUrl={e.avatarPath}
        />
      ))}
      <div ref={messagesEndRef} />
    </MainChatBody>
  )
}

export { LivechatBody }
