import { useTranslation } from 'react-i18next'
import { Text, ReactionBar, Participants } from 'components'
import { SetMediaType } from './components'
import { useThemeStore } from 'services/stores/theme'
import { FeedPostCardProps, defaultProps } from './types'
import { convertCountMessage } from 'utils'
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

const FeedPostCard = ({ ...props }: FeedPostCardProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()

  const translateMapper = [
    'page.feed.no_comments',
    'page.feed.comment',
    'page.feed.comments'
  ]

  return (
    <FeedContent>
      <CardContent>
        {
          props.type !== 'POLL' &&
          <SetMediaType {...props} />
        }
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
        <CardDescription fontSize={15}>
          {props.postDescription}
        </CardDescription>
        {
          props.type === 'POLL' &&
          <SetMediaType {...props} />
        }
        <CardReactions>
          <ReactionBar
            reactions={props.reactions}
            totalReactions={props.countReactions}
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
