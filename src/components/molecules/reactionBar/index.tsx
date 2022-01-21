import { useThemeStore } from 'services/stores/theme'
import { Container, Text, Popover } from 'components'
import { Icon } from '@iconify/react'
import { Props } from './types'
import { availableReactions } from './settings'
import { Reaction, EmoticonReaction } from './styles'
import { colors } from 'styles'
import { formatNumber } from 'utils'

const ReactionBar = ({
  reactions = [],
  totalReactions,
  reactionsTitle,
}: Props) => {
  const { colorMode } = useThemeStore()

  return (
    <Container alignItems="center">
      <Container>
        <Container>
          {reactions.map((reaction) => (
            <Reaction
              key={`${reaction.value}-reaction`}
              p={1}
              mr={1}
              minHeight={32}
            >
              <div>{reaction.value}</div>
              <Text kind="regular">{formatNumber(reaction.count, 1)}</Text>
            </Reaction>
          ))}
        </Container>
        <Container>
          <Popover
            popoverTrigger={
              <Reaction>
                <Icon
                  width={20}
                  height={20}
                  icon="mdi:emoticon-happy-outline"
                />
                <Icon width={20} height={20} icon="mdi:plus" />
              </Reaction>
            }
          >
            <Container
              display={'grid'}
              gridTemplateColumns={'repeat(6, 1fr)'}
              justifyItems={'center'}
            >
              {availableReactions.map((reaction) => (
                <EmoticonReaction key={`${reaction.value}-popover`} p={1} m={1}>
                  {reaction.value}
                </EmoticonReaction>
              ))}
            </Container>
          </Popover>
        </Container>
      </Container>
      <Container ml={2}>
        <Text
          kind="regular"
          fontWeight={500}
          color={colors.generalText[colorMode]}
        >{`${formatNumber(totalReactions, 1)} ${reactionsTitle}`}</Text>
      </Container>
    </Container>
  )
}

export { ReactionBar }
