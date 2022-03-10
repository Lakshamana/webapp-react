import { Container, Popover } from 'components'
import { Icon } from '@iconify/react'
import { Reaction, EmoticonReaction } from './../../styles'
import { availableReactions } from './../../settings'

const AddReactionButton = () => {
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
          {availableReactions.map((reaction) => (
            <EmoticonReaction key={`${reaction.name}-popover`} p={1} m={1}>
              {reaction.value}
            </EmoticonReaction>
          ))}
        </Container>
      </Popover>
    </Container>
  )
}

export { AddReactionButton }
