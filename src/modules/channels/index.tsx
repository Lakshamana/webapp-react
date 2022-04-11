import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { QUERY_CHANNELS } from 'services/graphql'
import { useThemeStore } from 'services/stores/theme'
import { useChannelsStore, useCommonStore } from 'services/stores'
import { Channel } from 'generated/graphql'
import { Container, Text, Skeleton } from 'components'
import { ChannelsGrid } from './components'
import { colors } from 'styles'

const ChannelsPage = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const { setChannelsList, channelsList, setActiveChannel } = useChannelsStore()
  const { setPageTitle } = useCommonStore()

  const { data, loading } = useQuery(QUERY_CHANNELS, {
    variables: {
      filter: {},
    },
    onCompleted: (result) => {
      setChannelsList(result.channels)
    },
  })

  const selectChannel = async (channelId: string | null) => {
    const selected = channelsList?.filter(
      (channel: Channel) => channel.id === channelId
    )
    if (selected?.length) {
      const myChannel = selected[0]
      await setActiveChannel({
        id: myChannel.id,
        name: myChannel.name,
        slug: myChannel.slug || '',
      })
      history.push(`/c/${myChannel.slug}`)
    }
  }

  useEffect(() => {
    setPageTitle(t('page.channels.page_title'))
    //eslint-disable-next-line
  }, [])

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
      {loading && <Skeleton kind="cards" numberOfCards={4} />}
      {!loading && (
        <ChannelsGrid
          channelSelected={selectChannel}
          channelsList={data?.channels}
        />
      )}
    </Container>
  )
}

export { ChannelsPage }
