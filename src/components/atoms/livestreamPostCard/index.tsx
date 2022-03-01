import { useHistory } from 'react-router'
import { LivestreamStatus } from 'generated/graphql'
import { LivestreamPostCardProps } from 'types/livestreams'
import { Text } from 'components'
import { Icon } from '@iconify/react'
import { PostContent, BlockedContent, Live } from './style'
import { colors } from 'styles'

const LivestreamPostCard = ({ ...props }: LivestreamPostCardProps) => {
  const history = useHistory()

  const isLive = props.status === LivestreamStatus.Active

  const selectPost = () => {
    history.push(`${props.url}`)
  }

  return (
    <PostContent {...props} onClick={selectPost}>
      {(props.isExclusive || props.isGeolocked) && (
        <BlockedContent>
          <Icon
            width={20}
            color={colors.white}
            icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
          ></Icon>
        </BlockedContent>
      )}
      {isLive && (
        <Live>
          <Text
            kind="headline"
            children={'Live'}
            textAlign={'center'}
            fontSize={12}
            color={`${colors.white}`}
          ></Text>
        </Live>
      )}
    </PostContent>
  )
}

export { LivestreamPostCard }
