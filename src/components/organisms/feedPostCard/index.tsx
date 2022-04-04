import { useTranslation } from 'react-i18next'
import { Text, ReactionBar, Participants } from 'components'
import { SetMediaType } from './components'
import { useThemeStore } from 'services/stores/theme'
import { FeedPostCardProps, defaultProps } from './types'
import { abbreviateNumber } from './utils'
import { colors } from 'styles'
import {
  FeedContent,
  CardContent,
  CardHeader,
  Date,
  CardDescription,
  CardReactions,
  CardFooter,
  CountMessage,
} from './style'

const FeedPostCard = ({ ...props }: FeedPostCardProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()

  const convertCountMessage = () => {
    const countMessages = abbreviateNumber(props.countMessages)
    if (Number(countMessages) === 0) return t('common.no_comments')
    const defineMessage = Number(countMessages) < 9
      ? t('common.comment')
      : t('common.comments')
    return `${countMessages} ${defineMessage}`
  }

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
          <ReactionBar />
        </CardReactions>
        <CardFooter>
          <Participants participants={[]} />
          <CountMessage marginLeft={'auto'} fontSize={15}>
            {convertCountMessage()}
          </CountMessage>
        </CardFooter>
      </CardContent>
    </FeedContent>
  )
}

FeedPostCard.defaultProps = defaultProps

export { FeedPostCard }
