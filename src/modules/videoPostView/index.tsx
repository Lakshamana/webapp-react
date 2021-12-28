import { Flex, Center } from '@chakra-ui/react'
import {
  MainLayout,
  VideoPlayer,
  ReactionBar,
  VideoPlaylist,
  Comment,
  Avatar,
  Input,
  Participants
} from "components"
import { pxToRem } from 'styles/metrics'
import { kFormatter } from 'utils'
import { Title, Subtitle, CommentCount } from './style'
import { video } from './mock'
import { useThemeStore } from 'services/stores/theme'

const VideoPostViewPage = () => {
  const { colorMode } = useThemeStore()

  return (
    <MainLayout>
      <Center width="100%">
        <Flex flexDir="column" width={pxToRem(1186)}>
          <VideoPlayer {...video.playerPros} />

          <Flex flexDir="column" paddingX={pxToRem(20)}>
            <Title>{video.title}</Title>
            <Subtitle>{video.subtitle}</Subtitle>

            <Flex marginY={pxToRem(40)}>
              <ReactionBar totalReactions={video.totalReactions} />
              <Flex flex={1} />
              <Participants
                totalParticipants={video.totalParticipants}
                participants={video.participants}
              />
            </Flex>
          </Flex>

          <Center 
            flex={1} 
            position="relative" 
            width="100vw" 
            height="100hw"
            left="calc(-50vw + 50%)" 
            bgColor={colorMode === 'dark' ? 'grey.900': 'grey.200'}
          >
            <Flex
              width={pxToRem(1186)}
              paddingX={pxToRem(20)}
              borderTop="1px solid"
              borderColor={colorMode === 'dark' ? 'grey.800': 'grey.300'}
              mt="-1px"
              flexDir={'row'}
            >
              <Flex flex={1} flexDir="column" paddingTop={pxToRem(40)}>
                <Flex>
                  <CommentCount>
                    {`${kFormatter(video.totalComments)} Comments`}
                  </CommentCount>
                </Flex>

                <Flex marginTop={pxToRem(26)}>
                  <Center marginRight={pxToRem(12)}>
                    <Avatar />
                  </Center>
                  <Input
                      onChange={() => { }}
                      error={false}
                      placeholder={'Add a comment…'}
                      onEnterPress={() => alert("enter")}
                  />
                </Flex>

                <Flex marginTop={pxToRem(40)}>
                  {video?.comments.map((comment) => (
                    <Comment
                      userName={comment.userName}
                      createdAt={comment.createdAt}
                      comment={comment.comment}
                      answers={comment.answers}
                    />
                  ))}
                </Flex>
              </Flex>

              <Flex flex={1} paddingTop={pxToRem(20)}>
                <VideoPlaylist
                  videos={video.relatedVideos}
                  autoplay={true}
                  title="Videos related"
                />
              </Flex>
            </Flex>
          </Center>
        </Flex>
      </Center>
    </MainLayout>
  )
}

export { VideoPostViewPage }
