import { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { Props } from './types'
import { LivechatFooter, LivechatHeader, LivechatBody } from './components'

const Livechat = ({ entityId, onPressEnter }: Props) => {
  const [value, setValue] = useState('')

  return (
    <Flex
      height={'100%'}
      flexDirection="column"
      overflowY={'scroll'}
      justifyContent={'space-between'}
    >
      <LivechatHeader />
      <LivechatBody />
      <LivechatFooter
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onPressIcon={() => onPressEnter(value)}
      />
    </Flex>
  )
}

export { Livechat }
