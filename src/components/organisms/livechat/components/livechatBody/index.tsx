import { MainChatBody } from './style'
import { Props } from './types'
import { formatDistance } from 'date-fns'
import { useRef, useEffect } from 'react'
import { BoxChat } from '../boxChat'
import { useAuthStore } from 'services/stores'

const LivechatBody = ({ messages }: Props) => {
  const { account } = useAuthStore()

  const messagesEndRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    })
  }, [messages])

  const convertData = (data) => {
    const date = new Date(data.seconds * 1000)
    return formatDistance(new Date(), date, {
      includeSeconds: true,
    })
  }

  return (
    <MainChatBody>
      {messages?.map((e) => (
        <BoxChat
          key={e.id}
          isOwnUser={e.userId === account?.id}
          username={e.username}
          date={convertData(e.dateAdded)}
          message={e.text}
          avatarUrl={e.avatarPath}
        />
      ))}
      <div ref={messagesEndRef} />
    </MainChatBody>
  )
}

export { LivechatBody }
