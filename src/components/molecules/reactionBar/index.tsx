import { useThemeStore } from 'services/stores/theme'
import { useTranslation } from 'react-i18next'
import { formatNumber } from 'utils'
import { Container, Text } from 'components'
import { availableReactions } from './settings'
import { Reaction } from './styles'
import { colors } from 'styles'
import { AddReactionButton } from './components'
import { ReactionsCount, ReactionType } from './types'
import { useEffect, useState } from 'react'
import { convertCountMessage } from 'utils'

const ReactionBar = ({
  myReactions,
  reactions,
  totalReactions,
}: ReactionsCount) => {
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  const [filteredReactions, setFilteredReactions] = useState<ReactionType[]>()
  const [myActiveReactions, setMyActiveReactions] = useState<ReactionType[]>()

  const translateMapper = [
    'page.feed.no_reactions',
    'page.feed.reaction',
    'page.feed.reactions'
  ]

  useEffect(() => {
    reactions?.sort((a, b) => b.count - a.count)
    const result = reactions?.slice(0, 3)
    setFilteredReactions(result)
  }, [reactions])

  useEffect(() => {
    const arr = myReactions?.filter((item) => item.count > 0)
    setMyActiveReactions(arr)
  }, [myReactions])

  return (
    <Container alignItems="center">
      <Container>
        {
          !!filteredReactions?.length &&
          filteredReactions?.map((reaction) => {
            const reactionValue = availableReactions.find(
              (item) => item.name === reaction?.name
            )
            return (
              <Reaction
                key={`${reaction?.name}-reaction`}
                p={1}
                mr={1}
                minHeight={32}
              >
                {reactionValue?.value}
                <Text ml={2}>
                  {formatNumber(reaction?.count || 0, 1)}
                </Text>
              </Reaction>
            )
          })}
      </Container>
      <AddReactionButton />
      <Container ml={2}>
        {!!totalReactions && (
          <Text color={colors.secondaryText[colorMode]}>
            {convertCountMessage(t, totalReactions, translateMapper)}
          </Text>
        )}
      </Container>
    </Container>
  )
}

export { ReactionBar }
