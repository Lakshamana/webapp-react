import { MainChatBody } from './style'
import { Props } from './types'
import { formatDistance } from 'date-fns'
import { useRef, useEffect } from 'react'
import { BoxChat } from '../boxChat'
import { useAuthStore } from 'services/stores'
import { availableReactions } from '../../settings'
import { Text, keyframes, Box } from '@chakra-ui/react'

import { motion } from 'framer-motion'

const LivechatBody = ({ messages, reactions }: Props) => {
  const { account } = useAuthStore()

  const animationKeyframes = keyframes`
  0% { transform: translateY(0px); rotate(0); opacity: 1 }
  100% { transform: translateY(-550px); rotate(30px); opacity: 0 }
`

  const animation = `${animationKeyframes} 10s ease-out`

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
      {reactions?.map((e) => {
        const filteredReaction = availableReactions.find(
          (r) => r.name === e.name
        )
        return (
          <Box position="relative" height="auto">
            <Text
              position="absolute"
              bottom="0"
              as={motion.div}
              id={e.id}
              key={e.id}
              animation={animation}
              fontSize="2rem"
              onAnimationEnd={() => {
                document.getElementById(`${e.id}`)!.style.display = 'none'
              }}
            >
              {filteredReaction?.value}
            </Text>
          </Box>
        )
      })}
      <div ref={messagesEndRef} />
    </MainChatBody>
  )
}

export { LivechatBody }
