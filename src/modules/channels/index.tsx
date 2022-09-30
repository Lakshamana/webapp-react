import { useQuery } from '@apollo/client'
import { Flex, Spinner } from '@chakra-ui/react'
import { Container, Text } from 'components'
import { Channel, Kinds } from 'generated/graphql'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { QUERY_CHANNELS, QUERY_PUBLIC_CHANNELS } from 'services/graphql'
import {
  useAuthStore,
  useChannelsStore,
  useCommonStore,
  useOrganizationStore
} from 'services/stores'
import { useThemeStore } from 'services/stores/theme'
import { colors } from 'styles'
import { ChannelsGrid } from './components'
import { IDefinedChannels } from './types'

const ChannelsPage = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const {
    setChannelsList,
    channelsList,
    setActiveChannel,
    clearActiveChannel,
  } = useChannelsStore()
  const { setPageTitle } = useCommonStore()
  const { isAnonymousAccess } = useAuthStore()
  const { organization } = useOrganizationStore()

  const definedChannel = async ({
    id,
    name,
    slug = '',
    kind = '',
    access = '',
  }: IDefinedChannels) => {
    await setActiveChannel({ id, name, slug, kind, access })
    history.push(`/c/${slug}`)
  }

  const { loading } = useQuery(
    isAnonymousAccess && organization?.kind === Kinds.Public
      ? QUERY_PUBLIC_CHANNELS
      : QUERY_CHANNELS,
    {
      variables: {
        filter: {},
      },
      onCompleted: async (result) => {
        const channelsList = isAnonymousAccess
          ? result.publicChannels
          : result.channels

        setChannelsList(channelsList)

        if (channelsList.length === 1) {
          await definedChannel({ ...channelsList[0] })
          return
        }
      },
    }
  )

  const selectChannel = async (channelId: string | null) => {
    const selected = channelsList?.find(
      (channel: Channel) => channel.id === channelId
    )

    if (selected) {
      await definedChannel({
        id: selected.id,
        name: selected.name,
        slug: selected.slug || '',
        kind: selected.kind || '',
        access: selected.access || '',
      })
    }
  }

  useEffect(() => {
    setPageTitle(t('page.channels.page_title'))
    clearActiveChannel()
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (organization?.kind === Kinds.Exclusive && isAnonymousAccess)
      history.replace('/login')
    //eslint-disable-next-line
  }, [organization])

  if (loading)
    return (
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
      <ChannelsGrid
        channelSelected={selectChannel}
        channelsList={channelsList || []}
      />
    </Container>
  )
}

export { ChannelsPage }
