import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Flex, Spacer } from '@chakra-ui/react'
import { useMutation } from '@apollo/client'
import { Icon } from "@iconify/react"
import { colors } from 'styles'
import { Vote, Text } from 'components'
import { useThemeStore, useCommentsStore } from 'services/stores'
import { MUTATION_ADD_VOTE } from 'services/graphql'
import { CommentVoteDirectionEnum } from 'generated/graphql'
import { defaultProps, IProps } from './types'
import { VoteButton } from './style'

const Options = ({ ...props }: IProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const {
    commentsStore,
    setUpdateCommentsStore,
  } = useCommentsStore()
  const [updateMyVote, { data }] = useMutation(MUTATION_ADD_VOTE)

  useEffect(() => {
    if (!data) return
    const { countDownvotes, countUpvotes, direction } = data.addVote.commentVote
    const { allComments } = commentsStore
    const updateAllComments = allComments.map(comment => {
      if (comment.id === props.id) {
        return {
          ...comment,
          myVote: direction,
          commentVoteStats: { countDownvotes, countUpvotes }
        }
      }
      return comment
    })
    setUpdateCommentsStore({
      ...commentsStore,
      allComments: updateAllComments
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const handleUpdateVote = (direction: CommentVoteDirectionEnum) => async () => {
    await updateMyVote({
      variables: {
        input:
        {
          comment: props.id,
          direction: direction === props.myVote ? CommentVoteDirectionEnum.Novote : direction
        }
      }
    })
  }

  const handleToggleShowReply = () => props.setShowReply(!props.showReply)

  return (
    <Flex
      w="fit-content"
      alignItems={'center'}
      mt={'12px'}
      ml={1}
      color={colors.comments[colorMode]}
    >
      <VoteButton onClick={handleUpdateVote(CommentVoteDirectionEnum.Upvote)}>
        <Vote
          type="UPVOTE"
          votes={props.commentVoteStats.countUpvotes}
          {...props}
        />
      </VoteButton>
      <Spacer w={4} />
      <VoteButton onClick={handleUpdateVote(CommentVoteDirectionEnum.Downvote)}>
        <Vote
          type="DOWNVOTE"
          votes={props.commentVoteStats.countDownvotes}
          {...props}
        />
      </VoteButton>
      {
        props.typeOfOptions === 'CARD' &&
        <Flex
          ml={'20px'}
          pl={'20px'}
          h={'32px'}
          borderLeft={'1px'}
          alignItems={'center'}
          borderColor={colors.comments[colorMode]}
        >
          <Flex
            cursor={'pointer'}
            onClick={handleToggleShowReply}
            _hover={{ color: colors.brand.primary[colorMode] }}
          >
            <Icon
              width={20}
              height={20}
              icon={props.showReply
                ? "iconoir:cancel"
                : "bx:message"
              }
            />
            <Spacer w={2} />
            <Text
              fontSize={12} fontWeight={'bold'}>
              {t(props.showReply
                ? 'common.cancel'
                : 'page.post.reply'
              ).toUpperCase()}
            </Text>
          </Flex>
        </Flex>
      }
    </Flex >
  )
}

Options.defaultProps = defaultProps

export { Options }