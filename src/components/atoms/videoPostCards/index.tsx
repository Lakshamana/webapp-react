import { useState } from 'react'
import { useHistory } from 'react-router'
import { VideoPostCardProps } from 'types/posts'
import { useMutation } from '@apollo/client'
import { Icon } from '@iconify/react'
import { Flex, Text, Box, Spacer, Spinner, Divider } from '@chakra-ui/react'
import { useThemeStore } from 'services/stores'
import { CardWrapper, PostContent, BlockedContent } from './style'
import { colors } from 'styles'
import { MUTATION_PIN_POST, MUTATION_UNPIN_POST } from 'services/graphql'
import { formattedSeconds, stripHTML } from 'utils/helperFunctions'

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

  const renderAddToMyListIcon = () => (
    <Box
      borderColor="red"
      backgroundColor={colors.cardBg[colorMode]}
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
  )

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
          background={colors.footerBg[colorMode]}
        >
          <Flex>
            <Text
              fontSize="0.85rem"
              noOfLines={2}
              fontWeight="bolder"
              color={colors.generalText[colorMode]}
            >
              {stripHTML(props.title)}
            </Text>
            {props.description ? (
              <Text
                fontSize="0.85rem"
                noOfLines={2}
                fontWeight="bolder"
                color={colors.generalText[colorMode]}
              >
                {stripHTML(props.description)}
              </Text>
            ) : (
              ''
            )}
            <Spacer px={1}></Spacer>
            {renderAddToMyListIcon()}
          </Flex>
          <Text
            display="flex"
            alignItems="center"
            fontSize="0.7rem"
            color={colors.secondaryText[colorMode]}
          >
            <Icon icon={`mdi:eye-outline`}></Icon>
            <Divider orientation="vertical" px={'2px'}></Divider>
            {props.countViews} views
          </Text>
          {props.mediaLength ? (
            <Text
              display="flex"
              alignItems="center"
              fontSize="0.7rem"
              color={colors.secondaryText[colorMode]}
            >
              <Icon icon={`mdi:clock-outline`}></Icon>
              <Divider orientation="vertical" px={'2px'}></Divider>
              {formattedSeconds(props?.mediaLength)}
            </Text>
          ) : (
            <></>
          )}
        </Box>
      ) : (
        <></>
      )}
    </CardWrapper>
  )
}

export { VideoPostCard }
