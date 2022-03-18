import { useDisclosure } from '@chakra-ui/hooks'
import { useThemeStore } from 'services/stores/theme'
import { Popover } from 'components'
import { LivechatFooterInput } from '../livechatFooterInput'
import {
  LivechatFooterMain,
  IconContainer,
  InputContainer,
  AnimatedIcon,
  PopoverIcon,
  Reaction,
} from './style'
import { colors } from 'styles'
import { Props } from './types'
import { availableReactions } from './settings'

const LivechatFooter = ({
  onPressIcon,
  value = '',
  onChange = () => {},
  onEnter = () => {},
}: Props) => {
  const { colorMode } = useThemeStore()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const colorLayout = {
    color: colors.generalText[colorMode],
  }

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
      <InputContainer flex={8} justifyContent="center">
        <LivechatFooterInput
          onEnter={onEnter}
          onChange={onChange}
          value={value}
        />
        {/* <Input
          value={value}
          onChange={onChange}
          inverted={false}
          rightIcon="send"
          onEnterPress={() => onEnter()}
        /> */}
      </InputContainer>
    </LivechatFooterMain>
  )
}

export { LivechatFooter }
