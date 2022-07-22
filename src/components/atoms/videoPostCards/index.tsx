import { useMutation } from '@apollo/client'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Box, Flex, Spacer, Spinner, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { MUTATION_PIN_POST, MUTATION_UNPIN_POST } from 'services/graphql'
import { useCustomizationStore, useThemeStore } from 'services/stores'

import { breakpoints, colors } from 'styles'
import { BlockedContent, CardWrapper, PlayContent, PostContent } from './style'

import { VideoPostCardProps } from 'types/posts'
import {
  formattedSeconds,
  stripHTML,
  stripHTMLExceptLineBreaks
} from 'utils/helperFunctions'

const VideoPostCard = ({ postUnpinned, ...props }: VideoPostCardProps) => {
  const history = useHistory()
  const { t } = useTranslation()
  const { activeChannelConfig } = useCustomizationStore()
  const { colorMode } = useThemeStore()
  const [hover, setHover] = useState(false)
  const [isPostPinned, setIsPostPinned] = useState(false)
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

  useEffect(() => {
    setIsPostPinned(props.isPinned || false)
  }, [props.isPinned])

  const [pinPost, { loading: loadingPinPost }] = useMutation(
    MUTATION_PIN_POST,
    {
      variables: {
        payload: {
          post: props.id,
          pinned: true,
        },
      },
      onCompleted: (result) => {
        setIsPostPinned(result?.pinPost?.pinned)
      },
    }
  )

  const [unpinPost, { loading: loadingUnpinPost }] = useMutation(
    MUTATION_UNPIN_POST,
    {
      variables: {
        id: props.id,
      },
      onCompleted: (result) => {
        if (postUnpinned) postUnpinned(props.id)
        setIsPostPinned(result?.unpinPost?.pinned)
      },
    }
  )

  const isLoading = loadingPinPost || loadingUnpinPost

  const isPostBlocked = props.isExclusive || props.isGeolocked

  const selectPost = () => history.push(`${props.url}`)

  const renderAddToMyListIcon = () => (
    <Box
      borderColor="red"
      backgroundColor={colors.cardBg[colorMode]}
      borderRadius="100%"
      minWidth="25px"
      height="25px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={() => (isPostPinned ? unpinPost() : pinPost())}
    >
      {isLoading && (
        <Spinner
          thickness="1px"
          width="15px"
          height="15px"
          color={colors.brand.primary[colorMode]}
        />
      )}
      {!isLoading && (
        <Icon
          icon={isPostPinned ? 'mdi:check' : 'mdi:plus'}
          color={
            isPostPinned
              ? colors.brand.primary[colorMode]
              : colors.generalText[colorMode]
          }
        />
      )}
    </Box>
  )

  const renderInfo = () => (
    <Box
      position="absolute"
      padding="0.6rem"
      borderBottomLeftRadius="4px"
      borderBottomRightRadius="4px"
      w={'100%'}
      background={colors.footerBg[colorMode]}
    >
      <Flex direction="row">
        <Flex direction="column">
          <Text
            fontSize="0.85rem"
            noOfLines={1}
            fontWeight="bolder"
            color={colors.generalText[colorMode]}
          >
            {stripHTML(props.title || '')}
          </Text>
          {props.description && (
            <Text
              mt={1}
              fontSize="0.7rem"
              noOfLines={2}
              lineHeight={'0.9rem'}
              color={colors.secondaryText[colorMode]}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: stripHTMLExceptLineBreaks(props.description),
                }}
              />
            </Text>
          )}
        </Flex>
        <Spacer />
        {renderAddToMyListIcon()}
      </Flex>
      <Flex mt={1}>
        {activeChannelConfig?.SETTINGS.DISPLAY_POST_THUMB_COUNT_VIEWS && (
          <Text
            display="flex"
            alignItems="center"
            fontSize="0.7rem"
            color={colors.secondaryText[colorMode]}
          >
            {props.countViews || 0} {t('page.post.views')}
          </Text>
        )}
        <Spacer px={1} />
        {props.mediaLength && (
          <Text
            display="flex"
            alignItems="center"
            fontSize="0.656rem"
            color={colors.secondaryText[colorMode]}
          >
            {formattedSeconds(props?.mediaLength)}
          </Text>
        )}
      </Flex>
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
              width={25}
              color={colors.white}
              icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
            />
          </BlockedContent>
        )}
        {!isPostBlocked && hover && (
          <PlayContent>
            <Icon
              width={50}
              color={colors.white}
              icon={`mdi:play-circle-outline`}
            />
          </PlayContent>
        )}
      </PostContent>
      {hover && isDesktop && renderInfo()}
    </CardWrapper>
  )
}

export { VideoPostCard }
