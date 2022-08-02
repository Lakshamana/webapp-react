import { useDisclosure } from '@chakra-ui/hooks'
import {
  Box, Input,
  InputGroup,
  InputRightElement, keyframes, Text
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Popover } from 'components'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores/theme'
import { colors } from 'styles'
import { Reaction as ReactionType } from 'types/common'
import { availableReactions } from 'utils/availableReactions'
import {
  AnimatedIcon, LivechatFooterMain, PopoverIcon,
  Reaction
} from './style'
import { Props } from './types'

import { motion } from 'framer-motion'
import { useAuthStore } from 'services/stores'

const LivechatFooter = ({
  sendMessage,
  sendReaction,
  reactions,
  reactionsEnabled,
  commentsEnabled,
}: Props) => {
  const { colorMode } = useThemeStore()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [newMessage, setNewMessage] = useState<string>('')
  const [activeReaction, setActiveReaction] = useState<ReactionType>()
  const { t } = useTranslation()
  const { isAnonymousAccess } = useAuthStore()

  const animationKeyframes = keyframes`
  0% { transform: translateY(0px); rotate(0); opacity: 1 }
  100% { transform: translateY(-550px); rotate(30px); opacity: 0 }
`

  const animation = `${animationKeyframes} 10s ease-out`

  const colorLayout = {
    color: colors.generalText[colorMode],
  }

  const handleChange = (event) => setNewMessage(event.target.value)

  const clearInput = () =>
    setTimeout(() => {
      setNewMessage('')
    }, 500)

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      sendMessage(newMessage)
      clearInput()
    }
  }

  return (
    <LivechatFooterMain {...{ colorMode }}>
      {reactionsEnabled && (
        <Box display="flex" alignItems="center" gridGap={2}>
          {reactions?.map((e) => {
            const filteredReaction = availableReactions.find(
              (r) => r.name === e.name
            )
            return (
              <Box position="absolute" top="0" key={e.id}>
                <Text
                  as={motion.div}
                  id={e.id}
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
          <Popover
            hasArrow
            onClose={onClose}
            isLazy
            width={'100px'}
            isOpen={isOpen}
            placement="top"
            popoverTrigger={
              <AnimatedIcon
                onClick={onOpen}
                width={32}
                icon="mdi:emoticon-happy-outline"
                style={{ cursor: 'pointer' }}
                {...colorLayout}
              />
            }
          >
            <PopoverIcon>
              {availableReactions.map((reaction) => (
                <Reaction
                  key={`${reaction.value}-popover`}
                  onClick={() => {
                    sendReaction(reaction.name)
                    setActiveReaction(reaction)
                    onClose()
                  }}
                >
                  {reaction.value}
                </Reaction>
              ))}
            </PopoverIcon>
          </Popover>
          {activeReaction && (
            <Box
              cursor="pointer"
              onClick={() => sendReaction(activeReaction.name)}
              fontSize="1.85rem"
            >
              {activeReaction.value}
            </Box>
          )}
        </Box>
      )}
      <InputGroup
        size="lg"
        borderRadius="6px"
        _groupHover={{ background: 'none' }}
        background={colors.inputBg[colorMode]}
        onKeyDown={handleKeyDown}
      >
        <Input
          focusBorderColor="none"
          fontSize="1rem"
          color={colors.secondaryText[colorMode]}
          placeholder={t('page.post.live.live_chat.say_something')}
          onChange={handleChange}
          disabled={!commentsEnabled || isAnonymousAccess}
          value={newMessage}
          background={colors.inputBg[colorMode]}
          variant="filled"
          _hover={{ background: 'none' }}
        />
        <InputRightElement>
          <Icon
            icon="mdi:send"
            width="25px"
            height="25px"
            cursor="pointer"
            color={
              commentsEnabled
                ? colors.brand.indicator[colorMode]
                : colors.secondaryText[colorMode]
            }
            onClick={() => {
              if (commentsEnabled) {
                sendMessage(newMessage)
                clearInput()
              }
            }}
          />
        </InputRightElement>
      </InputGroup>
    </LivechatFooterMain>
  )
}

export { LivechatFooter }
