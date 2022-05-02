import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/hooks'
import { useThemeStore } from 'services/stores/theme'
import { Popover } from 'components'
import { Input, InputGroup, InputRightElement, Box, Text, keyframes } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import {
  LivechatFooterMain,
  AnimatedIcon,
  PopoverIcon,
  Reaction,
} from './style'
import { colors } from 'styles'
import { Props } from './types'
import { availableReactions } from '../../settings'
import { useTranslation } from 'react-i18next'
import { Reaction as ReactionType } from 'types/common'

import { motion } from 'framer-motion'

const LivechatFooter = ({ sendMessage, sendReaction, reactions }: Props) => {
  const { colorMode } = useThemeStore()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [newMessage, setNewMessage] = useState<string>('')
  const [activeReaction, setActiveReaction] = useState<ReactionType>()
  const { t } = useTranslation()

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

  return (
    <LivechatFooterMain {...{ colorMode }}>
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
          fontSize="1.6rem"
        >
          {activeReaction.value}
        </Box>
      )}
      <InputGroup
        size="lg"
        borderRadius="6px"
        _groupHover={{ background: 'none' }}
        background={colors.inputBg[colorMode]}
      >
        <Input
          focusBorderColor="none"
          fontSize="1rem"
          color={colors.secondaryText[colorMode]}
          placeholder={t('page.post.live.live_chat.say_something')}
          onChange={handleChange}
          onKeyDown={(e: any) => {
            if (e.keyCode === 13) {
              sendMessage(newMessage)
              clearInput()
            }
          }}
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
            color={colors.brand.indicator[colorMode]}
            onClick={() => {
              sendMessage(newMessage)
              clearInput()
            }}
          />
        </InputRightElement>
      </InputGroup>
    </LivechatFooterMain>
  )
}

export { LivechatFooter }
