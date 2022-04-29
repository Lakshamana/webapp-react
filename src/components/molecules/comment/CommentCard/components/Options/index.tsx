import { useTranslation } from 'react-i18next'
import { Flex, Spacer } from '@chakra-ui/react'
import { useMutation } from '@apollo/client'
import { Icon } from "@iconify/react"
import { colors } from 'styles'
import { Vote, Text } from 'components'
import { useThemeStore } from 'services/stores'
import { MUTATION_ADD_VOTE } from 'services/graphql'
import { CommentVoteDirectionEnum } from 'generated/graphql'
import { defaultProps, IProps } from './types'
import { VoteButton } from './style'

const Options = ({ ...props }: IProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()

  const [updateVote] = useMutation(MUTATION_ADD_VOTE)

  const handleUpdateVote = (direction: CommentVoteDirectionEnum) => async () =>
    await updateVote({
      variables: { input: { comment: props.id, direction } }
    })

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
          type="upvote"
          votes={props.countUpVotes || 0}
        />
      </VoteButton>
      <Spacer w={4} />
      <VoteButton onClick={handleUpdateVote(CommentVoteDirectionEnum.Downvote)}>
        <Vote
          type="downvote"
          votes={props.countUpVotes || 0}
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