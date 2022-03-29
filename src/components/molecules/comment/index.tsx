import { Box, Flex, Spacer } from '@chakra-ui/react'
import { formatDistance } from 'date-fns'
import { colors } from 'styles'
import { useThemeStore } from 'services/stores'
import { Comment as CommentType } from 'generated/graphql'
import { Vote, Text, Avatar } from 'components'
import { CommentReplies } from './components'
import { pxToRem } from 'styles/metrics'
import { defaultProps } from './types'

const CommentWrapper = ({ ...props }: CommentType) => {
  const { colorMode } = useThemeStore()
  return (
    <>
      <Flex alignItems="center">
        <Text
          color={colors.generalText[colorMode]}
          fontSize={'1.1rem'}
          fontWeight={600}
        >
          {props.author?.username}
        </Text>
        <Text
          color={colors.secondaryText[colorMode]}
          ml={2}
          fontSize={'0.85rem'}
        >
          {/* TODO: Don't have createdAt field on API}
          {/* {formatDistance(new Date(props.createdAt), new Date(), {
            addSuffix: true,
          })} */}
        </Text>
      </Flex>

      <Text color={colors.generalText[colorMode]} mt={1} fontSize={pxToRem(16)}>
        {props.description}
      </Text>

      {/* <Flex w="fit-content" mt={2} ml={1} color={'whiteTransparent.200'}>
        <Vote type="upvote" votes={props.countUpvotes || 0} />
        <Spacer w={4} />
        <Vote type="downvote" votes={props.countUpvotes || 0} />
        <Flex alignItems="center">
          <Icon width={20} height={20} icon="mdi:message" />
          <Spacer w={2} />
          <Text fontSize={14} fontWeight={'bold'}>
            REPLY
          </Text>
        </Flex>
      </Flex> */}
    </>
  )
}

const Comment = ({ ...props }: CommentType) => {
  return (
    <Flex py={3}>
      <Avatar
        mr={4}
        width={'40px'}
        height={'40px'}
        name={`${props.author?.username}`}
        src={''}
      />
      <Box>
        <CommentWrapper {...props} />
        {/* <CommentReplies count={props.countComments}></CommentReplies> */}
      </Box>
    </Flex>
  )
}

Comment.defaultProps = defaultProps

export { Comment }
