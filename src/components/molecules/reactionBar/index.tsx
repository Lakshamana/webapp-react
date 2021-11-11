import { Container, Text, Popover } from 'components'
import { Plus, Smile } from 'react-feather'
import { useThemeStore } from 'services/stores/theme'

import { Props } from './types'

import { availableReactions } from './settings'
import { Reaction } from './styles'
import { colors } from 'styles'

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
              minWidth={50}
              minHeight={32}
            >
              <div>{reaction.value}</div>
              <Text kind="regular" ml={2}>
                {reaction.count}
              </Text>
            </Reaction>
          ))}
        </Container>
        <Container>
          <Reaction>
            <Popover
              trigger={
                <button>
                  <Reaction p={1} mr={1} minWidth={50} minHeight={32}>
                    <Plus size={20} />
                    <Smile size={20} />
                  </Reaction>
                </button>
              }
            >
              <Container
                display={'grid'}
                gridTemplateColumns={'repeat(6, 1fr)'}
                justifyItems={'center'}
              >
                {availableReactions.map((reaction) => (
                  <Reaction key={`${reaction.value}-popover`} p={1} m={1}>
                    {reaction.value}
                  </Reaction>
                ))}
              </Container>
            </Popover>
          </Reaction>
        </Container>
      </Container>
      <Container ml={2}>
        <Text
          kind="regular"
          fontWeight={500}
          color={colors.generalText[colorMode]}
        >{`${totalReactions} ${reactionsTitle}`}</Text>
      </Container>
    </Container>
  )
}

export { ReactionBar }
