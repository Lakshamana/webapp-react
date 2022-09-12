import { Box, Flex, Spacer, Spinner, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { ProgressBar } from 'components/atoms'
import { useTranslation } from 'react-i18next'
import { useCustomizationStore, useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { ComponentPostCardProps } from 'types/posts'
import {
  formattedSeconds,
  stripHTML,
  stripHTMLExceptLineBreaks
} from 'utils/helperFunctions'
import { BlockedContent, CardWrapper, PlayContent, PostContent } from './style'

const PostCard = ({ onClickCard, ...props }: ComponentPostCardProps) => {
  const isPostBlocked = props.isExclusive || props.isGeolocked
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  const { activeChannelConfig } = useCustomizationStore()

  const RenderAddToMyListIcon = () => (
    <Box
      backgroundColor={colors.cardBg[colorMode]}
      borderRadius="100%"
      minWidth="25px"
      height="25px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={() => (props.isPostPinned ? props.unpinPost() : props.pinPost())}
    >
      {props.isLoading && (
        <Spinner
          thickness="1px"
          width="15px"
          height="15px"
          color={colors.brand.primary[colorMode]}
        />
      )}
      {!props.isLoading && (
        <Icon
          icon={props.isPostPinned ? 'mdi:check' : 'mdi:plus'}
          color={
            props.isPostPinned
              ? colors.brand.primary[colorMode]
              : colors.generalText[colorMode]
          }
        />
      )}
    </Box>
  )

  return (
    <CardWrapper
      onMouseLeave={props.actionHover(false)}
      onMouseEnter={props.actionHover(true)}
    >
      <PostContent onClick={onClickCard} className="postContent" {...props}>
        {isPostBlocked && (
          <BlockedContent>
            <Icon
              width={25}
              color={colors.white}
              icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
            />
          </BlockedContent>
        )}
        {!isPostBlocked && props.hover && (
          <PlayContent>
            <Icon
              width={50}
              color={colors.white}
              icon={`mdi:play-circle-outline`}
            />
          </PlayContent>
        )}
      </PostContent>
      {
        props?.progress &&
        <ProgressBar value={props.progress} />
      }
      {props.hover && (
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
            {
              !props?.progress &&
              <RenderAddToMyListIcon />
            }
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
      )}
    </CardWrapper>
  )
}

export { PostCard }
