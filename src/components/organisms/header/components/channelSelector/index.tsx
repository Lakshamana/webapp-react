import { useLazyQuery } from '@apollo/client'
import { Box, Flex } from '@chakra-ui/layout'
import { Center, Divider, useMediaQuery } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { PropsChannelSelector } from './types'

import { Channel, Kinds } from 'generated/graphql'

import { QUERY_CHANNELS, QUERY_PUBLIC_CHANNELS } from 'services/graphql'
import { useAuthStore, useChannelsStore, useOrganizationStore, useTabsStore, useThemeStore } from 'services/stores'

import { Container, Popover, Text } from 'components'
import { Channels, ChannelSelected } from './components'

import { APP_SINGLE_CHANNEL } from 'config/constants'
import { getData } from 'services/storage'
import { breakpoints, colors } from 'styles'
import { CustomContainer } from './styles'

const ChannelSelector = ({ closeSideMenu }: PropsChannelSelector) => {
  const { colorMode } = useThemeStore()
  const { setActiveTab, tabsList } = useTabsStore()
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const { organization } = useOrganizationStore()
  // const [search, setSearch] = useState('')
  const {
    activeChannel,
    setActiveChannel,
    channelsList,
    setChannelsList,
    isSingleChannel,
  } = useChannelsStore()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const history = useHistory()
  const { isAnonymousAccess } = useAuthStore()

  const storedSingleChannel = getData(APP_SINGLE_CHANNEL)

  const [getChannels, { loading }] = useLazyQuery(
    isAnonymousAccess && 
    (organization?.kind === Kinds.Public || organization?.kind === Kinds.Exclusive)
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
      },
    }
  )

  useEffect(() => {
      getChannels()
    //eslint-disable-next-line
  }, [])

  const openChannelsList = () => {
    if (!channelsList?.length && !isAnonymousAccess) {
      getChannels()
    }
    closeSideMenu()
    setOpen(true)
  }

  // const handleSearch = (e: any) => setSearch(e.target.value)

  const handleSelect = (channel: Channel) => {
    let homeTab = tabsList.find((item) => item.TAB === 'home')
    if (homeTab) setActiveTab(homeTab)
    setActiveChannel({
      id: channel.id,
      name: channel.name,
      slug: channel.slug || '',
      kind: channel.kind || '',
    })
    setOpen(false)
    history.push(`/c/${channel.slug}`)
  }

  if (isSingleChannel || storedSingleChannel) return <></>

  return (
    <>
      <Center height="30px">
        <Divider orientation="vertical" color={colors.grey['700']} />
      </Center>
      <CustomContainer ml={'12px'}>
        <Flex alignItems="center">
          {isDesktop && (
            <Box mr={1} maxWidth={'70px'} wordBreak="normal">
              <Text
                lineHeight={1.2}
                fontWeight={'100'}
                color={colors.secondaryText[colorMode]}
                fontSize="14px"
              >
                {t('header.channel_selector.select')}
              </Text>
            </Box>
          )}
          <Popover
            isOpen={open}
            width={'320px'}
            placement={isDesktop ? 'bottom-start' : 'bottom-end'}
            onOpen={() => openChannelsList()}
            onClose={() => setOpen(false)}
            popoverTrigger={
              <button>
                <ChannelSelected {...{ open, colorMode }} />
              </button>
            }
          >
            <Container flexDirection="column">
              {/* <ChannelSearch
            {...{ search, colorMode }}
            onChange={() => handleSearch}
          /> */}
              <Channels
                selected={activeChannel}
                channels={channelsList || []}
                isLoading={loading}
                onSelect={handleSelect}
                {...{ colorMode }}
              />
            </Container>
          </Popover>
        </Flex>
      </CustomContainer>
    </>
  )
}

export { ChannelSelector }

