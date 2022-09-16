import { Flex, Skeleton } from '@chakra-ui/react'
import { Skeleton as SkeletonCard } from 'components/atoms'
import { useThemeStore } from 'services/stores/theme'
import { colors } from 'styles'

const SkeletonScroller = () => {
  const { colorMode } = useThemeStore()

  return (
    <Flex direction={'column'} paddingX={8}>
      <Skeleton
        height={8}
        width={'15rem'}
        mb={2}
        startColor={colors.skeleton.initial[colorMode]}
        endColor={colors.skeleton.end[colorMode]}
      />
      <SkeletonCard kind="cards" numberOfCards={4} />
    </Flex>
  )
}

export { SkeletonScroller }

