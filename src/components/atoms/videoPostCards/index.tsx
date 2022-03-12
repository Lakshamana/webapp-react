import { useState } from 'react'
import { useHistory } from 'react-router'
import { useMutation } from '@apollo/client'
import { Icon } from '@iconify/react'
import { Flex, Text, Box, Spacer, Spinner } from '@chakra-ui/react'
import { useThemeStore } from 'services/stores'
import { CardWrapper, PostContent, BlockedContent } from './style'
import { colors } from 'styles'
import { VideoPostCardProps } from 'types/posts'
import { MUTATION_PIN_POST, MUTATION_UNPIN_POST } from 'services/graphql'

const VideoPostCard = ({ ...props }: VideoPostCardProps) => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const [hover, setHover] = useState(false)

  const [pinPost, { loading }] = useMutation(
    props.isPinned ? MUTATION_UNPIN_POST : MUTATION_PIN_POST,
    {
      variables: {
        postId: props.id,
      },
    }
  )

  const selectPost = () => {
    history.push(`${props.url}`)
  }

  return (
    <CardWrapper
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      <PostContent onClick={selectPost} className="postContent" {...props}>
        {(props.isExclusive || props.isGeolocked) && (
          <BlockedContent>
            <Icon
              width={20}
              color={colors.white}
              icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
            ></Icon>
          </BlockedContent>
        )}
      </PostContent>
      {hover ? (
        <Box
          position="absolute"
          padding="0.6rem"
          borderBottomLeftRadius="4px"
          borderBottomRightRadius="4px"
          w={'100%'}
          background={colors.cardBg[colorMode]}
        >
          <Flex>
            <Text
              fontSize="0.85rem"
              noOfLines={1}
              fontWeight="bolder"
              color={colors.generalText[colorMode]}
            >
              {props.title}
            </Text>
            <Spacer px={1}></Spacer>
            <Box
              borderColor="red"
              backgroundColor={colors.footerBg[colorMode]}
              borderRadius="100%"
              width="25px"
              height="25px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={() => pinPost()}
            >
              {loading ? (
                <Spinner
                  thickness="1px"
                  width="15px"
                  height="15px"
                  color={colors.brand.primary[colorMode]}
                ></Spinner>
              ) : (
                <Icon
                  icon={props.isPinned ? 'mdi:check' : 'mdi:plus'}
                  color={
                    props.isPinned
                      ? colors.brand.primary[colorMode]
                      : colors.generalText[colorMode]
                  }
                ></Icon>
              )}
            </Box>
          </Flex>
          <Text fontSize="0.7rem" color={colors.secondaryText[colorMode]}>
            {props.countViews} views
          </Text>
        </Box>
      ) : (
        <></>
      )}
    </CardWrapper>
  )
}

export { VideoPostCard }
