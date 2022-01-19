import { InputGroup, InputRightElement } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Props } from "./types";
import { InputCustom, CharacterCounter } from './style';

const LivechatFooterInput = ({
  value = '',
  onChange = () => {},
  onEnter = () => {},
}: Props) => {
  return (
    <InputGroup size="md">
      <InputCustom
        pr="4.5rem"
        type="text"
        placeholder="Say something..."
        backgroundColor="#E2E9E9"
        value={value}
        onChange={(e) => onChange(e)}
        onKeyDown={(e: any) => {
          if (e.keyCode === 13) {
            onEnter()
          }
        }}
      />
      <InputRightElement
        width="auto"
        gridGap="0.5em"
        justifyContent="flex-end"
        px="1em"
      >
        {value.length !== 0 && (
          <CharacterCounter fontSize="xs">
            {value.length}
          </CharacterCounter>
        )}
        <Icon
          icon="fluent:send-28-filled"
          width="24"
          height="24"
          color="#2984F5"
          style={{ cursor: 'pointer' }}
          onClick={() => onEnter()}
        />
      </InputRightElement>
    </InputGroup>
  )
}

export { LivechatFooterInput }
