import { useTranslation } from 'react-i18next'
import { Text, ReactionBar, Participants } from 'components'
import { SetMediaType } from './components'
import { useThemeStore } from 'services/stores/theme'
import { useChannelsStore } from 'services/stores'
import { FeedPostCardProps, defaultProps } from './types'
import { convertCountMessage, convertCamelCaseToDash } from 'utils'
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
  CountComment
} from './style'

const MOCK_MY_REACTIONS = [
  {
    count: 999999,
    name: 'ANGRY_FACE'
  },
  {
    count: 777777,
    name: 'LAUGHING_FACE'
  }
]

const FeedPostCard = ({ ...props }: FeedPostCardProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { activeChannel } = useChannelsStore()

  const getPostUrl = (slug: string) => {
    return `/c/${convertCamelCaseToDash(activeChannel?.name)}/post/${slug}`
  }

  const translateMapper = [
    'page.feed.no_comments',
    'page.feed.comment',
    'page.feed.comments'
  ]

  const MOCK_ALL_REACTIONS = [
    ...props.reactions,
    {
      count: 13111111,
      name: 'LAUGHING_FACE'
    },
    {
      count: 13,
      name: 'RED_HEART'
    }
  ]

  return (
    <FeedContent>
      <CardContent>
        {
          props.type !== 'POLL' &&
          <Link to={getPostUrl(props.slug)}>
            <SetMediaType {...props} />
          </Link>
        }
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
            <Date fontSize="12px" fontWeight={'Bold'} marginRight={3}>
              {props.date}
            </Date>
          </CardHeader>
        </Link>
        <CardDescription fontSize={15}>
          {props.postDescription}
        </CardDescription>
        {
          props.type === 'POLL' &&
          <SetMediaType {...props} />
        }
        <CardReactions>
          <ReactionBar
            postId={props.id}
            reactions={MOCK_ALL_REACTIONS}
            totalReactions={props.countReactions}
            myReactions={MOCK_MY_REACTIONS}
          />
        </CardReactions>
        <CardFooter>
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
