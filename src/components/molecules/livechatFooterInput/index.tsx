import { Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Props } from "./types";

const LivechatFooterInput = ({
  value = '',
  onChange = () => {},
  onEnter = () => {},
}: Props) => {
  return (
    <InputGroup size="md">
      <Input
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
          <Text fontSize="xs" color="#5c5c5c">
            {value.length}
          </Text>
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
