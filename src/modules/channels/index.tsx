import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { Spinner, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { QUERY_CHANNELS } from 'services/graphql'
import { useThemeStore } from 'services/stores/theme'
import { useChannelsStore, useCommonStore } from 'services/stores'
import { Channel } from 'generated/graphql'
import { Container, Text, Skeleton } from 'components'
import { ChannelsGrid } from './components'
import { colors } from 'styles'
import { IDefinedChannels } from './types'

const ChannelsPage = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const [loading, setLoading] = useState(true)
  const { setChannelsList, channelsList, setActiveChannel } = useChannelsStore()
  const { setPageTitle } = useCommonStore()

  const definedChannel = async ({ id, name, slug = '' }: IDefinedChannels) => {
    await setActiveChannel({ id, name, slug })
    history.push(`/c/${slug}`)
  }

  const { data } = useQuery(QUERY_CHANNELS, {
    variables: {
      filter: {},
    },
    onCompleted: async (result) => {
      if (result.channels.length === 1) {
        await definedChannel({ ...result.channels[0] })
        return
      }
      setLoading(false)
      setChannelsList(result.channels)
    },
  })

  const selectChannel = async (channelId: string | null) => {
    const selected = channelsList?.filter(
      (channel: Channel) => channel.id === channelId
    )
    if (selected?.length) {
      await definedChannel({
        id: selected[0].id,
        name: selected[0].name,
        slug: selected[0].slug || ''
      })
    }
  }

  useEffect(() => {
    setPageTitle(t('page.channels.page_title'))
    //eslint-disable-next-line
  }, [])

  if (loading) return (
    <Flex
      width="100vw"
      alignSelf={'center'}
      justifyContent={'center'}
      backgroundColor={colors.bodyBg[colorMode]}
    >
      <Spinner
        speed="0.65s"
        thickness={'3px'}
        size={'xl'}
        color={colors.secondaryText[colorMode]}
      />
    </Flex>
  )

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
