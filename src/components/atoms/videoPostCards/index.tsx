import { useState } from 'react'
import { useHistory } from 'react-router'
import { Flex, Text, Box, Spacer, Divider } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'

import { CardWrapper, PostContent, BlockedContent, PlayContent } from './style'
import { colors } from 'styles'

import { formattedSeconds, stripHTML } from 'utils/helperFunctions'
import { VideoPostCardProps } from 'types/posts'

const VideoPostCard = ({ ...props }: VideoPostCardProps) => {
  const history = useHistory()
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const [hover, setHover] = useState(false)

  // TODO: ALL comments in this page are waiting for API Pin/Unpin Post mutations

  // const [pinPost, { loading }] = useMutation(
  //   props.isPinned ? MUTATION_UNPIN_POST : MUTATION_PIN_POST,
  //   {
  //     variables: {
  //       postId: props.id,
  //     },
  //   }
  // )

  const selectPost = () => history.push(`${props.url}`)

  // const renderAddToMyListIcon = () => (
  //   <Box
  //     borderColor="red"
  //     backgroundColor={colors.cardBg[colorMode]}
  //     borderRadius="100%"
  //     width="25px"
  //     height="25px"
  //     display="flex"
  //     alignItems="center"
  //     justifyContent="center"
  //     onClick={() => pinPost()}
  //   >
  //     {loading && (
  //       <Spinner
  //         thickness="1px"
  //         width="15px"
  //         height="15px"
  //         color={colors.brand.primary[colorMode]}
  //       ></Spinner>
  //     )}
  //     {!loading && (
  //       <Icon
  //         icon={props.isPinned ? 'mdi:check' : 'mdi:plus'}
  //         color={
  //           props.isPinned
  //             ? colors.brand.primary[colorMode]
  //             : colors.generalText[colorMode]
  //         }
  //       ></Icon>
  //     )}
  //   </Box>
  // )

  const renderInfo = () => (
    <Box
      position="absolute"
      padding="0.6rem"
      borderBottomLeftRadius="4px"
      borderBottomRightRadius="4px"
      w={'100%'}
      background={colors.footerBg[colorMode]}
    >
      <Flex direction="column">
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
        <Spacer px={1} />
        {/* {renderAddToMyListIcon()} */}
      </Flex>
      <Flex mt={1}>
        {props.countViews && (
          <Text
            display="flex"
            alignItems="center"
            fontSize="0.7rem"
            color={colors.secondaryText[colorMode]}
          >
            <Icon icon={`mdi:eye-outline`}></Icon>
            <Divider orientation="vertical" px={'2px'}></Divider>
            {props.countViews} {t('page.post.views')}
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
