import { Spinner } from '@chakra-ui/react'
import { Container, Text } from 'components'
import { useAccessVerifications } from 'contexts/accessVerifications'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuthStore } from 'services/stores'
import { useThemeStore } from 'services/stores/theme'
import { colors } from 'styles'
import { availableReactions } from 'utils/availableReactions'
import { convertCountMessage, formatNumber } from 'utils/helperFunctions'
import { AddReactionButton } from './components'
import { UpdateReactions } from './components/addReactionButton/types'
import { Reaction } from './styles'
import {
  MyReactionType,
  ReactionsCount,
  ReactionType,
  UpdateReactionMode
} from './types'

const ReactionBar = ({
  postId,
  myReactions,
  reactions,
  totalReactions,
  removeMyReaction,
  addMyReaction,
  setNewReaction,
}: ReactionsCount) => {
  const { colorMode } = useThemeStore()
  const { isAnonymousAccess } = useAuthStore()
  const { showActionNotAllowedAlert } = useAccessVerifications()
  const { t } = useTranslation()
  const [onlyThreeBiggests, setOnlyThreeBiggests] = useState<ReactionType[]>()
  const [allReactions, setAllReactions] = useState<ReactionType[]>()
  const [totalOfReactions, setTotalOfReactions] = useState<number>(0)
  const [myActiveReactions, setMyActiveReactions] = useState<MyReactionType[]>(
    []
  )
  const [updatingReactions, setUpdatingReactions] = useState<UpdateReactions>({
    reaction: '',
    isLoading: false,
  })

  const translateMapper = [
    'page.feed.no_reactions',
    'page.feed.reaction',
    'page.feed.reactions',
  ]

  useEffect(() => {
    if (!!allReactions?.length) {
      const listReactions = [...allReactions]
      listReactions?.sort((a, b) => b.count - a.count)
      const threeBiggests = listReactions?.slice(0, 3)
      setOnlyThreeBiggests(threeBiggests)
    }
  }, [allReactions])

  useEffect(() => {
    setAllReactions(reactions)
    setMyActiveReactions(myReactions)
    setTotalOfReactions(totalReactions ?? 0)
  }, [myReactions, reactions, totalReactions])

  const updateAllReactions = (data) => {
    setAllReactions(data)
    endOfUpdate()
  }
  const endOfUpdate = () =>
    setUpdatingReactions({ reaction: '', isLoading: false })
  const updateTotalReactions = (mode: UpdateReactionMode) => {
    if (mode === 'INCREASE') {
      setTotalOfReactions(totalOfReactions + 1)
    } else {
      if (totalOfReactions <= 0) return
      setTotalOfReactions(totalOfReactions - 1)
    }
  }

  const updateMyReaction = (reaction: string) => () => {
    if (isAnonymousAccess) {
      showActionNotAllowedAlert()
      return
    }
    if (updatingReactions.isLoading) return
    const variables = {
      input: {
        post: postId,
        reaction,
      },
    }
    if (setNewReaction) setNewReaction(reaction)
    setUpdatingReactions({ reaction, isLoading: true })
    const myReactionsContains = myActiveReactions.find(
      (each) => each.name === reaction
    )
    if (myReactionsContains) {
      removeMyReaction({ variables })
        .then(({ data }) => {
          const updateMyReaction = myActiveReactions?.filter(
            (each) => each.name !== reaction
          )
          setMyActiveReactions(updateMyReaction)
          updateAllReactions(data.removeReaction)
          updateTotalReactions('DECREASE')
        })
        .catch(endOfUpdate)
    } else {
      addMyReaction({ variables })
        .then(({ data }) => {
          setMyActiveReactions([...myActiveReactions, { name: reaction }])
          updateAllReactions(data.addReaction)
          updateTotalReactions('INCREASE')
        })
        .catch(endOfUpdate)
    }
  }

  return (
    <Container alignItems="center">
      <Container>
        {!!onlyThreeBiggests?.length &&
          onlyThreeBiggests?.map((reaction) => {
            const ifContainsName = ({ name }) => name === reaction?.name
            const reactionValue = availableReactions.find(ifContainsName)
            const isMyReaction = myActiveReactions.find(ifContainsName)
            const isUpdating =
              updatingReactions.reaction === reaction.name &&
              updatingReactions.isLoading
            return (
              <Reaction
                key={`${reaction?.name}-reaction`}
                p={1}
                mr={1}
                minHeight={32}
                myReaction={isMyReaction}
                onClick={updateMyReaction(reaction?.name)}
              >
                {isUpdating && (
                  <Spinner
                    speed="0.65s"
                    thickness={'3px'}
                    size={'md'}
                    color={colors.secondaryText[colorMode]}
                  />
                )}
                {!isUpdating && (
                  <>
                    {reactionValue?.value}
                    <Text ml={2}>{formatNumber(reaction?.count || 0, 1)}</Text>
                  </>
                )}
              </Reaction>
            )
          })}
      </Container>
      <AddReactionButton
        updateReactions={updatingReactions}
        myActiveReactions={myActiveReactions}
        updateMyReaction={updateMyReaction}
      />
      <Container ml={2}>
        {!!totalOfReactions && (
          <Text color={colors.secondaryText[colorMode]}>
            {convertCountMessage(t, totalOfReactions, translateMapper)}
          </Text>
        )}
      </Container>
    </Container>
  )
}

export { ReactionBar }
