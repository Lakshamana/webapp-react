import { useState } from 'react'
import { useDisclosure } from '@chakra-ui/hooks'
import { useThemeStore } from 'services/stores/theme'
import { Popover } from 'components'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Icon } from '@iconify/react'
import {
  LivechatFooterMain,
  AnimatedIcon,
  PopoverIcon,
  Reaction,
} from './style'
import { colors } from 'styles'
import { Props } from './types'
import { availableReactions } from './settings'
import { useTranslation } from 'react-i18next'

const LivechatFooter = ({ sendMessage }: Props) => {
  const { colorMode } = useThemeStore()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [newMessage, setNewMessage] = useState<string>('')
  const { t } = useTranslation()

  const colorLayout = {
    color: colors.generalText[colorMode],
  }

  const handleChange = (event) => setNewMessage(event.target.value)

  return (
    <LivechatFooterMain {...{ colorMode }}>
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
            <Reaction key={`${reaction.value}-popover`}>
              {reaction.value}
            </Reaction>
          ))}
        </PopoverIcon>
      </Popover>
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
              setTimeout(() => {
                setNewMessage('')
              }, 500)
            }}
          />
        </InputRightElement>
      </InputGroup>
    </LivechatFooterMain>
  )
}

export { LivechatFooter }
