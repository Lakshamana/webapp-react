import { Box, Flex, Spacer, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import { Icon } from "@iconify/react"
import { colors } from 'styles'
import { useThemeStore } from 'services/stores'
import { Comment as CommentType } from 'generated/graphql'
import { Vote, Text, Avatar } from 'components'
import { CommentReplies } from './components'
import { pxToRem } from 'styles/metrics'
import { defaultProps } from './types'
import { translateFormatDistance } from 'utils'

const CommentWrapper = ({ ...props }: CommentType) => {
  const { colorMode } = useThemeStore()
  return (
    <>
      <Text color={colors.generalText[colorMode]} fontSize={pxToRem(16)}>
        {props.description}
      </Text>
      <Flex
        w="fit-content"
        mt={'12px'}
        ml={1}
        color={colors.comments[colorMode]}
      >
        <Vote type="upvote" votes={props.countUpVotes || 0} />
        <Spacer w={4} />
        <Vote type="downvote" votes={props.countUpVotes || 0} />
        <Flex
          alignItems="center"
          ml={'20px'}
          pl={'20px'}
          h={'32px'}
          borderLeft='1px'
          borderColor={colors.comments[colorMode]}
        >
          <Icon width={20} height={20} icon="bx:message" />
          <Spacer w={2} />
          <Text fontSize={12} fontWeight={'bold'}>
            REPLY
          </Text>
        </Flex>
      </Flex>
    </>
  )
}

const Comment = ({ ...props }: CommentType) => {
  const { colorMode } = useThemeStore()

  return (
    <>
      <Grid templateColumns='42px 7fr' gap={2} alignItems={'center'} my={4}>
        <GridItem>
          <Avatar
            width={'36px'}
            height={'36px'}
            name={String(props.author?.username)}
            src={''}
          />
        </GridItem>
        <GridItem>
          <Flex alignItems="baseline">
            <Text
              color={colors.generalText[colorMode]}
              fontSize={'18px'}
              fontWeight={700}
            >
              {props.author?.username} User name [WIP]
            </Text>
            <Text
              color={colors.secondaryText[colorMode]}
              ml={2}
              fontSize={'14px'}
            >
              {translateFormatDistance(props.createdAt)}
            </Text>
          </Flex>
        </GridItem>
        <GridItem />
        <GridItem w={'100%'}>
          <CommentWrapper {...props} />
        </GridItem>
      </Grid>
      <Box>
        {/* <CommentReplies count={props.countComments} /> */}
      </Box>
    </>
  )
}

Comment.defaultProps = defaultProps

export { Comment }
