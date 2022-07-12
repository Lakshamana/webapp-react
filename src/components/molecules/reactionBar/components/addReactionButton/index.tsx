import { Spinner } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Container, Popover } from 'components'
import { useThemeStore } from 'services/stores/theme'
import { colors } from 'styles'
import { availableReactions } from 'utils/availableReactions'
import { EmoticonReaction, Reaction } from './../../styles'
import { PropsType } from './types'

const AddReactionButton = ({ myActiveReactions, updateMyReaction, updateReactions }: PropsType) => {
  const { colorMode } = useThemeStore()
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
            const isUpdating = updateReactions.reaction === reaction.name && updateReactions.isLoading
            const isMyReaction = Boolean(myActiveReactions.find(({ name }) => name === reaction.name))
            return (
              <EmoticonReaction
                key={`${reaction.name}-popover`}
                onClick={updateMyReaction(reaction.name)}
                myReaction={isMyReaction}
              >
                {
                  isUpdating &&
                  <Spinner
                    speed="0.65s"
                    thickness={'3px'}
                    size={'md'}
                    color={colors.secondaryText[colorMode]}
                  />
                }
                {
                  !isUpdating &&
                  reaction.value
                }
              </EmoticonReaction>
            )
          })}
        </Container>
      </Popover>
    </Container>
  )
}

export { AddReactionButton }
