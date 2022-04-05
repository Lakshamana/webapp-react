import { useEffect, useState } from 'react'
import { useThemeStore } from 'services/stores/theme'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@apollo/client'
import { ADD_MY_REACTION, REMOVE_MY_REACTION } from 'services/graphql'
import { Container, Text } from 'components'
import { AddReactionButton } from './components'
import { availableReactions } from './settings'
import { Reaction } from './styles'
import { colors } from 'styles'
import { ReactionsCount, ReactionType } from './types'
import { formatNumber, convertCountMessage } from 'utils'

const ReactionBar = ({
  postId,
  myReactions,
  reactions,
  totalReactions,
}: ReactionsCount) => {
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  const [filteredReactions, setFilteredReactions] = useState<ReactionType[]>()
  const [myActiveReactions, setMyActiveReactions] = useState<ReactionType[]>()

  const [addMyReaction, { loading: addLoading }] = useMutation(ADD_MY_REACTION)
  const [removeMyReaction, { loading: removeLoading }] = useMutation(REMOVE_MY_REACTION)

  const translateMapper = [
    'page.feed.no_reactions',
    'page.feed.reaction',
    'page.feed.reactions'
  ]

  useEffect(() => {
    reactions?.sort((a, b) => b.count - a.count)
    const onlyThreeBiggests = reactions?.slice(0, 3)
    setFilteredReactions(onlyThreeBiggests)
  }, [reactions])

  useEffect(() => {
    setMyActiveReactions(myReactions)
  }, [myReactions])

  const updateMyReaction = (reaction: string, chooseType: boolean) => () => {
    const variables = {
      input: {
        post: postId,
        reaction
      }
    }
    //TODO: waiting for API
    // chooseType
    //   ? addMyReaction({ variables })
    //   : removeMyReaction({ variables })
  }

  return (
    <Container alignItems="center">
      <Container>
        {
          !!filteredReactions?.length &&
          filteredReactions?.map((reaction) => {
            const ifContainsName = ({ name }) => name === reaction?.name
            const reactionValue = availableReactions.find(ifContainsName)
            const isMyReaction = Boolean(myActiveReactions?.find(ifContainsName))
            return (
              <Reaction
                key={`${reaction?.name}-reaction`}
                p={1}
                mr={1}
                minHeight={32}
                myReaction={isMyReaction}
                onClick={updateMyReaction(reaction?.name, !isMyReaction)}
              >
                {reactionValue?.value}
                <Text ml={2}>
                  {formatNumber(reaction?.count || 0, 1)}
                </Text>
              </Reaction>
            )
          })}
      </Container>
      <AddReactionButton
        myActiveReactions={myActiveReactions}
        updateMyReaction={updateMyReaction}
      />
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
