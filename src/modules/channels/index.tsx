import { useQuery } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { convertCamelCaseToDash } from 'utils'
import { Channel } from 'generated/graphql'
import { QUERY_CHANNELS } from 'services/graphql'
import { useThemeStore } from 'services/stores/theme'
import { useChannelsStore } from 'services/stores'
import { Container, Text, Skeleton } from 'components'
import { ChannelsGrid } from './components'
import { colors } from 'styles'

const ChannelsPage = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const { setChannelsList, channelsList, setActiveChannel } = useChannelsStore()

  const { data, loading } = useQuery(QUERY_CHANNELS, {
    variables: {
      filter: {},
    },
    onCompleted: (result) => {
      setChannelsList(result.channels)
    },
  })

  const selectChannel = async (channelId: string | null) => {
    let selected = channelsList?.filter(
      (channel: Channel) => channel.id === channelId
    )
    if (selected?.length) {
      let channelRoute = convertCamelCaseToDash(selected[0].name)
      await setActiveChannel(selected[0])
      history.push(`/c/${channelRoute}`)
    }
  }

  return (
    <Container defaultPadding flexDirection="column" width={'100%'}>
      <Text
        color={colors.generalText[colorMode]}
        paddingY={[10, 20]}
        fontSize={['22px', '28px']}
        style={{ textTransform: 'uppercase' }}
        fontWeight={500}
      >
        {t('page.channels.title')}
      </Text>
      {loading && <Skeleton kind="cards" numberOfCards={5}></Skeleton>}
      {!!data?.channels?.length && !loading && (
        <ChannelsGrid
          channelSelected={selectChannel}
          channelsList={data.channels}
        ></ChannelsGrid>
      )}
    </Container>
  )
}

export { ChannelsPage }
