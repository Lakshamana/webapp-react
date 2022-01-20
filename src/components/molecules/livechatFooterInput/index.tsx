import { InputGroup, InputRightElement } from '@chakra-ui/react'
import { Props } from "./types";
import { InputCustom, CharacterCounter, IconCustom } from './style';

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
        <IconCustom
          icon="fluent:send-28-filled"
          onClick={() => onEnter()}
        />
      </InputRightElement>
    </InputGroup>
  )
}

export { LivechatFooterInput }
