import { useQuery } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { isExclusive, convertCamelCaseToDash } from 'utils'
import { Channel } from 'generated/graphql'
import { QUERY_CHANNELS } from 'services/graphql'
import { useThemeStore } from 'services/stores/theme'
import { useChannelsStore } from 'services/stores'
import { ThumborInstanceTypes, ThumborParams, useThumbor } from 'services/hooks'
import { Container, Text, Skeleton } from 'components'
import { ChannelsGrid } from './components'
import { colors } from 'styles'
import { useEffect } from 'react'

const ChannelsPage = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const { generateImage } = useThumbor()
  const { setChannelsList, channelsList, setActiveChannel } = useChannelsStore()

  const { data, loading } = useQuery(QUERY_CHANNELS, {
    variables: {
      filter: {},
    },
  })

  const generateChannelThumb = (path: string, isExclusive: boolean) => {
    const imageOptions: ThumborParams = {
      size: {
        height: 800,
      },
    }
    if (isExclusive) {
      imageOptions.blur = 20
    }
    return generateImage(ThumborInstanceTypes.IMAGE, path, imageOptions)
  }

  useEffect(() => {
    const channels = data?.channels?.reduce((memo, curr: Channel) => {
      const exclusive = isExclusive(curr.kind)
      const thumbnail = generateChannelThumb(
        curr.customization.thumbnail.img_path,
        exclusive
      )
      memo.push({
        ...curr,
        thumbnail,
        isExclusive: exclusive,
      })
      return memo
    }, [])

    setChannelsList(channels)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const selectChannel = async (channelId: string) => {
    let selected = channelsList.filter((channel) => channel.id === channelId)
    let channelRoute = convertCamelCaseToDash(selected[0].name)
    await setActiveChannel(selected[0])
    history.push(`/c/${channelRoute}`)
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
      {loading && <Skeleton numberOfCards={5}></Skeleton>}
      {channelsList && (
        <ChannelsGrid
          channelSelected={selectChannel}
          channelsList={channelsList}
        ></ChannelsGrid>
      )}
    </Container>
  )
}

export { ChannelsPage }
