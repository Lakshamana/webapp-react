import { useTranslation } from 'react-i18next'
import { Text, ReactionBar, Participants } from 'components'
import { SetMediaType } from './components'
import { useThemeStore } from 'services/stores/theme'
import { useChannelsStore, useCustomizationStore } from 'services/stores'
import { FeedPostCardProps, defaultProps } from './types'
import { convertCountMessage } from 'utils/helperFunctions'
import { Link } from 'react-router-dom'
import { colors } from 'styles'
import {
  FeedContent,
  CardContent,
  CardHeader,
  Date,
  CardDescription,
  CardReactions,
  CardFooter,
  CountComment,
} from './style'

const FeedPostCard = ({ ...props }: FeedPostCardProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { activeChannel } = useChannelsStore()
  const { activeChannelConfig } = useCustomizationStore()

  const getPostUrl = (slug: string) => {
    return `/c/${activeChannel?.slug}/post/${slug}`
  }

  const translateMapper = [
    'page.feed.no_comments',
    'page.feed.comment',
    'page.feed.comments',
  ]

  return (
    <FeedContent onClick={props.updateState}>
      <CardContent>
        {props.type !== 'POLL' && (
          <Link to={getPostUrl(props.slug)}>
            <SetMediaType {...props} />
          </Link>
        )}
        <Link to={getPostUrl(props.slug)}>
          <CardHeader>
            <Text
              kind="headline"
              fontSize={22}
              fontWeight={'Bold'}
              color={colors.generalText[colorMode]}
            >
              {props.postTitle}
            </Text>
            <Date fontSize="12px" fontWeight={'Bold'}>
              {props.date}
            </Date>
          </CardHeader>
        </Link>
        <CardDescription fontSize={15}>{props.postDescription}</CardDescription>
        {props.type === 'POLL' && <SetMediaType {...props} />}
        {activeChannelConfig?.SETTINGS.DISPLAY_REACTIONS && (
          <CardReactions>
            <ReactionBar
              postId={props.id}
              reactions={[...props.reactions]}
              totalReactions={props.countReactions}
              myReactions={props.myReactions}
            />
          </CardReactions>
        )}
        <CardFooter
          mt={activeChannelConfig?.SETTINGS.DISPLAY_REACTIONS ? 0 : 3}
        >
          <Participants participants={[]} />
          <CountComment marginLeft={'auto'} fontSize={15}>
            {convertCountMessage(t, props.countMessages, translateMapper)}
          </CountComment>
        </CardFooter>
      </CardContent>
    </FeedContent>
  )
}

FeedPostCard.defaultProps = defaultProps

export { FeedPostCard }
