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
  return (
    <FeedContent>
      <CardContent>
        {props.type === 'POLL' ? '' : <SetMediaType {...props} />}
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
        <CardDescription fontSize={15}>{props.postDescription}</CardDescription>
        {props.type === 'POLL' ? <SetMediaType {...props} /> : ''}
        <CardReactions>
          <ReactionBar />
        </CardReactions>
        <CardFooter>
          <Participants participants={[]} />
          <CountMessage marginLeft={'auto'} fontSize={15}>
            {abbreviateNumber(props.countMessages)} {t('common.messages')}
          </CountMessage>
        </CardFooter>
      </CardContent>
    </FeedContent>
  )
}

FeedPostCard.defaultProps = defaultProps

export { FeedPostCard }
