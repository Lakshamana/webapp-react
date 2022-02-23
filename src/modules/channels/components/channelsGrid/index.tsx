import { SimpleGrid } from '@chakra-ui/react'
import { ChannelCard } from 'components'
import { Props } from './types'

const ChannelsGrid = ({ channelsList, channelSelected }: Props) => {
  return (
    <SimpleGrid width={'100%'} columns={[1, 2, 2, 3, 3, 4, 5]} spacing={3}>
      {channelsList?.map((item) => (
        <ChannelCard
          id={item.id}
          name={item.name}
          key={item.id}
          onSelectChannel={(value) => channelSelected(value || '')}
          isExclusive={item.isExclusive}
          image={item.thumbnail}
        ></ChannelCard>
      ))}
    </SimpleGrid>
  )
}

export { ChannelsGrid }
