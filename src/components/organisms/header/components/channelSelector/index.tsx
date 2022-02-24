import { useState } from 'react'
import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next'
import { useLazyQuery } from '@apollo/client'
import { Box, Flex } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/react'

import { Channel } from 'generated/graphql'

import { useChannelsStore, useTabsStore } from 'services/stores'
import { QUERY_CHANNELS } from 'services/graphql'
import { useThemeStore } from 'services/stores'

import { convertCamelCaseToDash } from 'utils'

import { Container, Popover, Text } from 'components'
import { Channels, ChannelSearch, ChannelSelected } from './components'

import { CustomContainer } from './styles'
import { colors, breakpoints } from 'styles'

const ChannelSelector = () => {
  const { colorMode } = useThemeStore()
  const { setActiveTab, tabsList } = useTabsStore()
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const { activeChannel, setActiveChannel, channelsList, setChannelsList } =
    useChannelsStore()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const history = useHistory()

  const [getChannels, { data: channelsData, loading }] = useLazyQuery(
    QUERY_CHANNELS,
    {
      variables: {
        filter: {},
      },
      onCompleted: (result) => {
        setChannelsList(result.channels)
      },
    }
  )

  const openChannelsList = () => {
    if (!channelsList.length) {
      getChannels()
    }
    setOpen(true)
  }

  const handleSearch = (e: any) => {
    setSearch(e.target.value)
  }

  const handleSelect = (channel: Channel) => {
    let homeTab = tabsList.filter((item) => item.id === 'home')
    setActiveTab(homeTab[0])
    setActiveChannel(channel)
    setOpen(false)
    let channelName = convertCamelCaseToDash(channel.name)
    history.push(`/c/${channelName}`)
  }

  return (
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
              channels={channelsList}
              isLoading={loading}
              onSelect={handleSelect}
              {...{ colorMode }}
            />
          </Container>
        </Popover>
      </Flex>
    </CustomContainer>
  )
}

export { ChannelSelector }
