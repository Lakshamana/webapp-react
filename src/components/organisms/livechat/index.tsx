import { Flex, useDisclosure } from '@chakra-ui/react'
import { ActionNotAllowed } from 'components/molecules'
import { firebaseDB } from 'config/firebase'
import {
  addDoc,
  collection,
  DocumentData,
  limit,
  onSnapshot,
  orderBy,
  query,
  startAfter
} from 'firebase/firestore'
import throttle from 'lodash.debounce'
import { useEffect, useMemo, useState } from 'react'
import { useAuthStore } from 'services/stores'
import { MessageDocumentData, ReactionDocumentData } from 'types/firebase'
import { parseResultSnapshot, timestampNow } from 'utils/firebase'
import { LivechatBody, LivechatFooter, LivechatHeader } from './components'
import { Props } from './types'

const Livechat = ({
  entityId,
  isCommentsEnabled,
  isReactionsEnabled,
}: Props) => {
  const [messages, setMessagesData] = useState<DocumentData[]>([])
  const [reactions, setReactionsData] = useState<DocumentData[]>([])
  const { account, isAnonymousAccess } = useAuthStore()
  const {
    isOpen: isActionNotAllowedOpen,
    onOpen: onOpenActionNotAllowed,
    onClose: onCloseActionNotAllowed,
  } = useDisclosure()

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
    if (isAnonymousAccess) {
      onOpenActionNotAllowed()
      return
    }

    if (!message) return

    const filteredMessage = message.trim()
    if (!filteredMessage) return

    const messageToSend: MessageDocumentData = {
      userId: account?.id || '',
      username: account?.username || '',
      avatarPath: account?.profile?.avatar?.imgPath || '',
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
      <LivechatBody enabled={isCommentsEnabled} messages={messages} />
      <LivechatFooter
        sendMessage={sendNewMessage}
        sendReaction={isAnonymousAccess ? onOpenActionNotAllowed : debouncedSendReaction}
        reactions={reactions}
        reactionsEnabled={isReactionsEnabled}
        commentsEnabled={isCommentsEnabled}
      />
      <ActionNotAllowed
        isOpen={isActionNotAllowedOpen}
        onClose={onCloseActionNotAllowed}
      />
    </Flex>
  )
}

export { Livechat }
