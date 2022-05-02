import { useState, useMemo } from 'react'
import { Flex } from '@chakra-ui/react'
import { Props } from './types'
import { LivechatFooter, LivechatHeader, LivechatBody } from './components'
import { firebaseDB } from 'config/firebase'
import { useAuthStore } from 'services/stores'
import {
  collection,
  query,
  DocumentData,
  limit,
  onSnapshot,
  addDoc,
  orderBy,
  startAfter,
} from 'firebase/firestore'
import { useEffect } from 'react'
import { timestampNow, parseResultSnapshot } from 'utils/firebase'
import { MessageDocumentData, ReactionDocumentData } from 'types/firebase'
import throttle from 'lodash.debounce'

const Livechat = ({ entityId }: Props) => {
  const [messages, setMessagesData] = useState<DocumentData[]>([])
  const [reactions, setReactionsData] = useState<DocumentData[]>([])
  const { account } = useAuthStore()

  const messagesCollection = collection(
    firebaseDB,
    `livestream/${entityId}/comments`
  )
  const reactionsCollection = collection(
    firebaseDB,
    `livestream/${entityId}/reactions`
  )

  const messagesQuery = query(
    messagesCollection,
    orderBy('dateAdded'),
    limit(100)
  )

  const reactionsQuery = query(
    reactionsCollection,
    orderBy('dateAdded'),
    startAfter(timestampNow())
  )

  const sendNewMessage = (message: string) => {
    if (!message) return

    const filteredMessage = message.trim()
    if (!filteredMessage) return

    const messageToSend: MessageDocumentData = {
      userId: account?.id || '',
      username: account?.username || '',
      avatarPath: account?.profile?.avatar_url || '',
      updatedAt: timestampNow(),
      text: filteredMessage,
      dateAdded: timestampNow(),
    }

    addDoc(messagesCollection, messageToSend)
  }

  const sendNewReaction = (reaction: string) => {
    if (!reaction) return

    const reactionToSend: ReactionDocumentData = {
      dateAdded: timestampNow(),
      name: reaction,
      userId: account?.id!,
      filtered: false,
    }

    addDoc(reactionsCollection, reactionToSend)
  }

  const debouncedSendReaction = useMemo(
    () => throttle(sendNewReaction, 500),
    //eslint-disable-next-line
    []
  )

  useEffect(() => {
    const messagesUnsubscriber = onSnapshot(messagesQuery, (snapshot) => {
      const messages = parseResultSnapshot(snapshot)
      setMessagesData((oldArray) => [...oldArray, ...messages])
    })

    const reactionsUnsubscriber = onSnapshot(reactionsQuery, (snapshot) => {
      const reactions = parseResultSnapshot(snapshot)
      setReactionsData((oldArray) => [...oldArray, ...reactions])
    })

    // Unsubscribe on unmount to avoid a memory leak
    return () => {
      messagesUnsubscriber()
      reactionsUnsubscriber()
      debouncedSendReaction.cancel()
    }
    //eslint-disable-next-line
  }, [])

  return (
    <Flex
      height={'100%'}
      flexDirection="column"
      overflowY={'scroll'}
      justifyContent={'space-between'}
    >
      <LivechatHeader />
      <LivechatBody messages={messages}/>
      <LivechatFooter
        sendMessage={sendNewMessage}
        sendReaction={debouncedSendReaction}
        reactions={reactions}
      />
    </Flex>
  )
}

export { Livechat }
