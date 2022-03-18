import { MainChatBody } from './style'
import { Props } from './types'

import { BoxChat } from '../boxChat'

const LivechatBody = ({ messages }: Props) => {
  return (
    <MainChatBody>
      {messages?.map((e) => (
        <BoxChat
          isOwnUser={e.isOwnUser}
          username={e.username}
          date={e.createdAt}
          message={e.message}
          avatarUrl={e.userAvatar}
        />
      ))}
    </MainChatBody>
  )
}

export { LivechatBody }
