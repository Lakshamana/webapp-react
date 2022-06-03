import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next'
import { useLazyQuery } from '@apollo/client'
import { Box, Flex } from '@chakra-ui/layout'
import { useMediaQuery, Divider, Center } from '@chakra-ui/react'
import { PropsChannelSelector } from './types'

import { Channel } from 'generated/graphql'

import { useChannelsStore, useTabsStore } from 'services/stores'
import { QUERY_CHANNELS } from 'services/graphql'
import { useThemeStore } from 'services/stores'

import { Container, Popover, Text } from 'components'
import { Channels, ChannelSelected } from './components'

import { CustomContainer } from './styles'
import { colors, breakpoints } from 'styles'
import { getData } from 'services/storage'
import { APP_SINGLE_CHANNEL } from 'config/constants'

const ChannelSelector = ({ closeSideMenu }: PropsChannelSelector) => {
  const { colorMode } = useThemeStore()
  const { setActiveTab, tabsList } = useTabsStore()
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
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

  const storedSingleChannel = getData(APP_SINGLE_CHANNEL)

  const [getChannels, { loading }] = useLazyQuery(QUERY_CHANNELS, {
    variables: {
      filter: {},
    },
    onCompleted: (result) => setChannelsList(result.channels),
  })

  useEffect(() => {
    if (isSingleChannel === null && storedSingleChannel === null) getChannels()
    //eslint-disable-next-line
  }, [])

  const openChannelsList = () => {
    if (!channelsList?.length) {
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
