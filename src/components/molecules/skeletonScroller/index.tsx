import { Flex, Skeleton, useMediaQuery } from '@chakra-ui/react'
import { Skeleton as SkeletonCard } from 'components/atoms'
import { useThemeStore } from 'services/stores/theme'
import { breakpoints, colors } from 'styles'

const SkeletonScroller = () => {
  const { colorMode } = useThemeStore()

  const [sm] = useMediaQuery(`(max-width: ${breakpoints.md})`)
  const [md] = useMediaQuery(`(max-width: ${breakpoints.lg})`)
  const [lg] = useMediaQuery(`(max-width: ${breakpoints.xl})`)

  const cards = sm ? 2 : md ? 3 : lg ? 4 : 5

  return (
    <Flex direction={'column'} paddingX={{ base: 8, ssm: 4, sm: 6 }} width={'100%'}>
      <Skeleton
        height={7}
        width={'15rem'}
        mb={4}
        startColor={colors.skeleton.initial[colorMode]}
        endColor={colors.skeleton.end[colorMode]}
      />
      <SkeletonCard kind="cards" numberOfCards={cards} />
    </Flex>
  )
}

export { SkeletonScroller }
