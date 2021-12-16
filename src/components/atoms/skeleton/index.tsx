import { Skeleton as SkeletonLoading } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { ChannelCard } from 'components'
import { useThemeStore } from 'services/stores/theme'
import { colors } from 'styles'
import { Props } from './types'

const Skeleton = ({ children, numberOfCards, ...props }: Props) => {
  const { colorMode } = useThemeStore()
  console.log(numberOfCards)
  return (
    <SimpleGrid width={'100%'} columns={[1, 2, 2, 3, 3, 4, 5]} spacing={3}>
      {Array.from(Array(numberOfCards).keys()).map(() => {
        return (
          <SkeletonLoading
            startColor={colors.skeleton.initial[colorMode]}
            fadeDuration={0.8}
            speed={1}
            borderRadius={'4px'}
            endColor={colors.skeleton.end[colorMode]}
            {...props}
          >
            <ChannelCard image={''}></ChannelCard>
          </SkeletonLoading>
        )
      })}
    </SimpleGrid>
  )
}

export { Skeleton }
