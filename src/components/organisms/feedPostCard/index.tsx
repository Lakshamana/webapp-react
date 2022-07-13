import { Participants, ReactionBar, Text } from 'components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useChannelsStore, useCustomizationStore } from 'services/stores'
import { useThemeStore } from 'services/stores/theme'
import { colors } from 'styles'
import { convertCountMessage, stripHTML } from 'utils/helperFunctions'
import { SetMediaType } from './components'
import {
  CardContent, CardDescription, CardFooter, CardHeader, CardReactions, CountComment, Date, FeedContent
} from './style'
import { defaultProps, FeedPostCardProps } from './types'

const FeedPostCard = ({ ...props }: FeedPostCardProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { activeChannel } = useChannelsStore()
  const { activeChannelConfig } = useCustomizationStore()

  const translateMapper = [
    'page.feed.no_comments',
    'page.feed.comment',
    'page.feed.comments',
  ]

  const getPostUrl = (slug: string) => `/c/${activeChannel?.slug}/post/${slug}`

  return (
    <FeedContent onClick={props.updateState()}>
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
            <Date fontSize={14}>
              {props.date}
            </Date>
          </CardHeader>
        </Link>
        <CardDescription fontSize={16}>{stripHTML(props.postDescription)}</CardDescription>
        {props.type === 'POLL' && <SetMediaType {...props} />}
        {activeChannelConfig?.SETTINGS.DISPLAY_REACTIONS && (
          <CardReactions>
            <ReactionBar
              postId={props.id}
              reactions={[...props.reactions]}
              totalReactions={props.countReactions}
              myReactions={props.myReactions}
              removeMyReaction={props.removeMyReaction}
              addMyReaction={props.addMyReaction}
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
