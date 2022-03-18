import { useState, useRef } from 'react'
import { Props } from './types'
import {
  collection,
  query,
  orderBy,
  limitToLast,
  addDoc,
} from '@firebase/firestore'

import { useCollectionData } from 'react-firebase-hooks/firestore'
import { timestampNow } from 'utils/firebase'

import { Flex } from '@chakra-ui/react'
import { LivechatFooter, LivechatHeader, LivechatBody } from './components'
import { firebaseDB } from 'config/firebase'
import { useEffect } from 'react'
import { useAuthStore } from 'services/stores'
import { MessageDocumentData } from 'types/firebase'

const Livechat = ({ entityId, onPressEnter }: Props) => {
  const [value, setValue] = useState('')
  const [startFrom, setStartFrom] = useState(2)
  const { account, user } = useAuthStore()

  const dummy = useRef()
  const messagesRef = collection(firebaseDB, `livestream/${entityId}/comments`)

  const queryMessage = query(
    messagesRef,
    orderBy('dateAdded'),
    limitToLast(100)
  )
  const [messages] = useCollectionData(queryMessage, {})

  const message: MessageDocumentData = {
    userId: user?.id || '',
    username: account?.username || '',
    avatarPath: user?.avatar_path || '',
    updatedAt: timestampNow(),
    text: 'add new message',
    dateAdded: timestampNow(),
  }

  const sendMessage = async () => {
    addDoc(messagesRef, message)
  }

  useEffect(() => {
    sendMessage()
  }, [])

  useEffect(() => {}, [messages])

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
