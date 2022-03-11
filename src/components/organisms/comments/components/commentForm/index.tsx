import { InputGroup, InputRightElement, Flex } from '@chakra-ui/react'
import { useAuthStore } from 'services/stores'
import { Avatar } from 'components'
import { InputCustom, IconCustom } from './style'

const CommentForm = () => {
  const { user, account } = useAuthStore()
  return (
    <Flex alignItems="center">
      <Avatar
        mr={3}
        width={'40px'}
        height={'40px'}
        src={user?.avatar_url || ''}
        name={account?.username || ''}
      />
      <InputGroup size="lg" display="flex" alignItems="center" my={5}>
        <InputCustom
          focusBorderColor="none"
          type="text"
          placeholder="Add a comment…"
          onChange={(e) => {}}
          onKeyDown={(e: any) => {}}
        />
        <InputRightElement children={<IconCustom icon="mdi:send" />} />
      </InputGroup>
    </Flex>
  )
}

export { CommentForm }
