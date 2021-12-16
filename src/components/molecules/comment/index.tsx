import { CommentType, defaultProps } from './types';
import { Box, Flex, Spacer, Center } from "@chakra-ui/react"
import { Vote, Text, Avatar } from "components";
import { pxToRem } from "styles/metrics";
import { Icon } from "@iconify/react";
import { useState } from 'react';

const CommentWrapper = ({ userName, createdAt, comment }) => {
  return (
    <>
      <Flex alignItems="baseline">
          <Text
            color={"textLight"}
            kind="title"
            fontSize={pxToRem(20)}
            fontWeight={600}
          >
            { userName }
          </Text>
          <Text
            color={"textMedium"}
            kind="title"
            ml={3}
            fontSize={pxToRem(14)}
          >
            { createdAt }
          </Text>
        </Flex>

        <Text
          color={"textLight"}
          mt={2}
          fontSize={pxToRem(16)}
        >
          { comment }
        </Text>

        <Flex w="fit-content" mt={2} ml={1} color={"whiteTransparent.200"}>
          <Vote type="upvote" votes={"1.3K"} />
          <Spacer w={6} />
          <Vote type="downvote" votes={"29"} />

          <Spacer w={5} />|<Spacer w={5} />

          <Flex alignItems="center">
            <Icon width={20} height={20} icon="bi:chat-left" />
            <Spacer w={2} />
            <Text fontSize={14} fontWeight={"bold"}>REPLY</Text>
          </Flex>
        </Flex>
      </>
  )
}

const Comment = ({
  userName,
  comment,
  createdAt,
  answers,
}: CommentType) => {
  const [openComments, setOpenComments] = useState(false)
  return (
    <Flex>
      <Flex marginRight={pxToRem(12)}>
        <Avatar />
      </Flex>

      <Box>
        <CommentWrapper
          userName={userName}
          createdAt={createdAt}
          comment={comment}
        />

        {answers?.length && (
          <>
            <Center color="blue.300" fontWeight={"bold"} mt={4} fontSize={12} onClick={() => setOpenComments(!openComments)} cursor={"pointer"} width={"fit-content"}>
              <Icon icon={ openComments ? "bx:bx-chevron-up" : "bx:bx-chevron-down" } width={20} height={20} />
              {` ${openComments ? 'HIDE' : 'SEE'} ${answers?.length} REPLIES`}
            </Center>

            {openComments && (
              <Flex flexDir={"column"} marginTop={pxToRem(12)}>
                {answers?.map(({ userName, createdAt, comment }) => (
                  <Flex marginTop={pxToRem(12)}>
                    <Flex marginRight={pxToRem(12)}>
                      <Avatar size="medium" />
                    </Flex>
                    <Flex flexDir={"column"}>
                      <CommentWrapper
                        userName={userName}
                        createdAt={createdAt}
                        comment={comment}
                      />
                    </Flex>
                  </Flex>
                ))}
              </Flex>
            )}
          </>
        )}
      </Box>
    </Flex>
  )
}

Comment.defaultProps = defaultProps

export { Comment }
