import { Container, Popover } from 'components'
import { Icon } from '@iconify/react'
import { Reaction, EmoticonReaction } from './../../styles'
import { availableReactions } from './../../settings'
import { PropsType } from './types'

const AddReactionButton = ({ myActiveReactions, updateMyReaction }: PropsType) => {
  return (
    <Container>
      <Popover
        popoverTrigger={
          <Reaction>
            <Icon width={22} height={22} icon="mdi:emoticon-happy-outline" />
            <Icon width={18} height={18} icon="mdi:plus" />
          </Reaction>
        }
      >
        <Container
          display={'grid'}
          gridTemplateColumns={'repeat(6, 1fr)'}
          justifyItems={'center'}
        >
          {availableReactions.map((reaction) => {
            const isMyReaction = Boolean(myActiveReactions?.find(({ name }) => name === reaction?.name))
            return (
              <EmoticonReaction
                key={`${reaction.name}-popover`}
                onClick={updateMyReaction(reaction.name, !isMyReaction)}
                myReaction={isMyReaction}
              >
                {reaction.value}
              </EmoticonReaction>
            )
          })}
        </Container>
      </Popover>
    </Container>
  )
}

export { AddReactionButton }
