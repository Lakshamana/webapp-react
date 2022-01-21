import { HeaderMain, Text } from './style'
import { colors } from 'styles'
import { Props } from './types'
import { useThemeStore } from 'services/stores/theme'
import { Icon } from '@iconify/react'
import { useState } from 'react'

const LivechatHeader = ({ title = '', onCloseChat = () => {} }: Props) => {
  const { colorMode } = useThemeStore()

  const [chatOpen, setchatOpen] = useState(true)

  const colorLayout = {
    color: colors.generalText[colorMode],
  }

  return (
    <HeaderMain
      justifyContent="space-between"
      height="48px"
      width={'100%'}
      display="flex"
      {...{ colorMode }}
    >
      <Text fontSize={20} fontWeight={500} {...colorLayout}>
        {title}
      </Text>
      <Icon
        icon={chatOpen ? 'carbon:chat-off' : 'carbon:chat'}
        width="28"
        height="28"
        style={{ color: colorLayout.color, cursor: 'pointer' }}
        onClick={() => {
          setchatOpen(!chatOpen)
          onCloseChat(chatOpen)
        }}
      />
    </HeaderMain>
  )
}

export { LivechatHeader }
