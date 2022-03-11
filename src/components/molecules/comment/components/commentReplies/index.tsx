import { useState } from 'react'
import { Center, Flex } from '@chakra-ui/layout'
import { Icon } from '@iconify/react'
import { Avatar } from 'components'
import { pxToRem } from 'styles/metrics'

const CommentReplies = ({ count }) => {
  const [openComments, setOpenComments] = useState(false)
  return (
    <>
      {count && (
        <Center
          color="blue.300"
          fontWeight={'bold'}
          mt={2}
          fontSize={'0.8rem'}
          onClick={() => setOpenComments(!openComments)}
          cursor={'pointer'}
          width={'fit-content'}
        >
          <Icon
            icon={openComments ? 'bx:bx-chevron-up' : 'bx:bx-chevron-down'}
            width={20}
            height={20}
          />
          {openComments ? 'HIDE' : 'SEE'} {count || 0} REPLIES
        </Center>
      )}

      {openComments && (
        <Flex flexDir={'column'} marginTop={pxToRem(12)}>
          {/* {answers?.map(({ username, createdAt, comment }) => (
            <Flex marginTop={pxToRem(12)}>
              <Flex marginRight={pxToRem(12)}>
                <Avatar />
              </Flex>
              <Flex flexDir={'column'}>
                <CommentWrapper
                  username={username}
                  createdAt={createdAt}
                  comment={comment}
                />
              </Flex>
            </Flex>
          ))} */}
        </Flex>
      )}
    </>
  )
}

export { CommentReplies }
