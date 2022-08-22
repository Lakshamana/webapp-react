import { useMutation } from '@apollo/client'
import { Participants, ReactionBar, Text } from 'components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import {
  MUTATION_ADD_MY_REACTION,
  MUTATION_REMOVE_MY_REACTION
} from 'services/graphql'
import {
  ThumborInstanceTypes,
  ThumborParams,
  useThumbor
} from 'services/hooks/useThumbor'
import { useChannelsStore, useCustomizationStore } from 'services/stores'
import { useThemeStore } from 'services/stores/theme'
import { colors } from 'styles'
import { isEntityBlocked, isEntityGeolocked } from 'utils/accessVerifications'
import { convertCountMessage } from 'utils/helperFunctions'
import { SetMediaType } from './components'
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardReactions,
  CountComment,
  Date,
  FeedContent
} from './style'
import { defaultProps, FeedItemProps, FeedPostCardProps } from './types'

import { useEffect, useState } from 'react'

import { intervalToDuration } from 'date-fns'
import { translateFormatDistance } from 'utils/helperFunctions'

const FeedPostCard = ({ item, updateState }: FeedItemProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { activeChannel } = useChannelsStore()
  const { activeChannelConfig } = useCustomizationStore()
  const { generateImage } = useThumbor()
  const [mappedItem, setMappedItem] = useState<FeedPostCardProps>()

  const [addMyReaction] = useMutation(MUTATION_ADD_MY_REACTION, {
    onCompleted: ({ addReaction }) => {},
  })

  const [removeMyReaction] = useMutation(MUTATION_REMOVE_MY_REACTION, {
    onCompleted: ({ removeReaction }) => {},
  })

  const translateMapper = [
    'page.feed.no_comments',
    'page.feed.comment',
    'page.feed.comments',
  ]

  const itemMedia = () => {
    switch (item.media?.__typename) {
      case 'MediaAudio':
        return null
      case 'MediaPhoto':
        return item.media.imgPath
      case 'MediaVideo':
        return item.thumbnail?.imgPath
    }
  }

  const getImageUrl = () => {
    const url = itemMedia()

    const imageOptions: ThumborParams = {
      size: {
        height: 0,
        width: 800,
      },
    }

    if (isEntityBlocked(item)) {
      imageOptions.blur = 20
    }

    const secondImgUrl =
      item.media?.__typename === 'MediaVideo'
        ? `${item.media.baseUrl}/${item.media.thumbnailPath}`
        : ''

    if (url) {
      return generateImage(ThumborInstanceTypes.IMAGE, url, imageOptions)
    }

    return secondImgUrl
  }

  useEffect(() => {
    const duration =
      item.media?.__typename === 'MediaVideo' ? item?.media?.duration : null

    const convertedDuration =
      duration && intervalToDuration({ start: 0, end: duration * 1000 })

    const mediaLength = convertedDuration
      ? `${convertedDuration.hours ? `${convertedDuration.hours}:` : ''}${
          convertedDuration.minutes
        }:${convertedDuration.seconds}`
      : ''

    const coverImage = getImageUrl()

    const date = item?.publishedAt && translateFormatDistance(item?.publishedAt)

    setMappedItem({
      slug: item.slug || '',
      postTitle: item.title,
      postDescription: item.description,
      date,
      type:
        item?.type && item.type.charAt(0).toUpperCase() + item.type.slice(1),
      hasActivity: true,
      displayViews: true,
      countMessages: item.countComments,
      countReactions: item.countReactions,
      myReactions: item.myReactions,
      reactions: item.reactions,
      coverImage,
      mediaLength,
      postUrl: `/c/${activeChannel?.slug}/post/${item.slug}`,
      // views: item.counts?.countViews,
      //TODO: Waiting for Audio posts on API
      // voted: !!item.myVote,
      isExclusive: isEntityBlocked(item),
      isGeolocked: isEntityGeolocked(item),
    })
    //eslint-disable-next-line
  }, [item])

  return (
    <FeedContent onClick={updateState}>
      <CardContent>
        <Link to={`${mappedItem?.postUrl}`}>
          <SetMediaType {...mappedItem} />
        </Link>
        <Link to={`${mappedItem?.postUrl}`}>
          <CardHeader>
            <Text
              kind="headline"
              fontSize={22}
              fontWeight={'Bold'}
              color={colors.generalText[colorMode]}
            >
              {item.title}
            </Text>
            <Date fontSize={14}>{mappedItem?.date}</Date>
          </CardHeader>
        </Link>
        <CardDescription fontSize={16}>
          <div dangerouslySetInnerHTML={{ __html: item.description }} />
        </CardDescription>
        {/* {item.type === 'POLL' && <SetMediaType {...mappedItem} />} */}
        {activeChannelConfig?.SETTINGS.DISPLAY_REACTIONS && (
          <CardReactions>
            <ReactionBar
              postId={item.id}
              reactions={[...item.reactions]}
              totalReactions={item.countReactions}
              myReactions={item.myReactions}
              removeMyReaction={removeMyReaction}
              addMyReaction={addMyReaction}
            />
          </CardReactions>
        )}
        <CardFooter
          mt={activeChannelConfig?.SETTINGS.DISPLAY_REACTIONS ? 0 : 3}
        >
          <Participants participants={[]} />
          <CountComment marginLeft={'auto'} fontSize={15}>
            {convertCountMessage(t, item.countComments, translateMapper)}
          </CountComment>
        </CardFooter>
      </CardContent>
    </FeedContent>
  )
}

FeedPostCard.defaultProps = defaultProps

export { FeedPostCard }
