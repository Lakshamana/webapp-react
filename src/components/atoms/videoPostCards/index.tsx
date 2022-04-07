import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router'
import { Flex, Text, Box, Spacer, Spinner } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import { MUTATION_PIN_POST, MUTATION_UNPIN_POST } from 'services/graphql'
import { useCustomizationStore, useThemeStore } from 'services/stores'

import { CardWrapper, PostContent, BlockedContent, PlayContent } from './style'
import { colors } from 'styles'

import { formattedSeconds, stripHTML } from 'utils/helperFunctions'
import { VideoPostCardProps } from 'types/posts'

const VideoPostCard = ({ ...props }: VideoPostCardProps) => {
  const history = useHistory()
  const { t } = useTranslation()
  const { activeChannelConfig } = useCustomizationStore()
  const { colorMode } = useThemeStore()
  const [hover, setHover] = useState(false)

  const [pinPost, { loading: loadingPinPost }] = useMutation(
    MUTATION_PIN_POST,
    {
      variables: {
        payload: {
          post: props.id,
          pinned: true,
        },
      },
    }
  )

  const [unpinPost, { loading: loadingUnpinPost }] = useMutation(
    MUTATION_UNPIN_POST,
    {
      variables: {
        id: props.id,
      },
    }
  )

  const isLoading = loadingPinPost || loadingUnpinPost

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
      onClick={() => (props.isPinned ? unpinPost() : pinPost())}
    >
      {isLoading && (
        <Spinner
          thickness="1px"
          width="15px"
          height="15px"
          color={colors.brand.primary[colorMode]}
        ></Spinner>
      )}
      {!isLoading && (
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
        <Flex direction='column'>
          <Text
            fontSize="0.85rem"
            noOfLines={1}
            fontWeight="bolder"
            color={colors.generalText[colorMode]}
          >
            {stripHTML(props.title)}
          </Text>
          {props.description && (
            <Text
              mt={1}
              fontSize="0.7rem"
              noOfLines={2}
              lineHeight={'0.9rem'}
              color={colors.secondaryText[colorMode]}
            >
              {stripHTML(props.description)}
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
              width={20}
              color={colors.white}
              icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
            ></Icon>
          </BlockedContent>
        )}
        {!props.isExclusive && hover && (
          <PlayContent>
            <Icon
              width={50}
              color={colors.white}
              icon={`mdi:play-circle-outline`}
            />
          </PlayContent>
        )}
      </PostContent>
      {hover && renderInfo()}
    </CardWrapper>
  )
}

export { VideoPostCard }
