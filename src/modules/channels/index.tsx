import { useQuery } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import { SimpleGrid } from '@chakra-ui/react'
import { QUERY_CHANNELS } from 'services/graphql'
import { useThemeStore } from 'services/stores/theme'
import { Container, Text, ChannelCard, Skeleton } from 'components'
import { FilterFindAllChannelsInput, ChannelsQuery } from 'generated/graphql'
import { colors } from 'styles'

const ChannelsPage = () => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const filtersData: FilterFindAllChannelsInput = {}

  const { loading, data } = useQuery<ChannelsQuery>(QUERY_CHANNELS, {
    variables: {
      filter: filtersData,
    },
  })
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
        <SimpleGrid width={'100%'} columns={[1, 2, 2, 3, 3, 4, 5]} spacing={3}>
          {/* TO-DO: Create function to build image URL with default url get by API */}
          {/* TO-DO: waiting for API to define kinf of channel */}
          {data?.channels.map((channel) => (
            <ChannelCard
              key={channel.id}
              image={`https://d2ui6twqy19jn9.cloudfront.net/${channel.customization.thumbnail.img_path}`}
            ></ChannelCard>
          ))}
        </SimpleGrid>
      </Container>
  )
}

export { ChannelsPage }
