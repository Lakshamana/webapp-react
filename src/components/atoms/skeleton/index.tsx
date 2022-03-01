import { Skeleton as SkeletonLoading } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { useThemeStore } from 'services/stores/theme'
import { colors } from 'styles'
import { RANDOM_ID } from 'utils'
import { Props, defaultProps } from './types'
import { PostCard } from './styles'

const Skeleton = ({ children, numberOfCards, kind, ...props }: Props) => {
  const { colorMode } = useThemeStore()
  const renderSkeleton = () => {
    switch (kind) {
      case 'cards':
        return (
          <SimpleGrid
            width={'100%'}
            columns={[1, 2, 2, 3, 3, 4, 5]}
            spacing={3}
          >
            {Array.from(Array(numberOfCards).keys()).map(() => {
              return (
                <SkeletonLoading
                  key={`loading-${RANDOM_ID()}`}
                  startColor={colors.skeleton.initial[colorMode]}
                  fadeDuration={0.8}
                  speed={1}
                  borderRadius={'4px'}
                  endColor={colors.skeleton.end[colorMode]}
                  {...props}
                >
                  <PostCard>{}</PostCard>
                </SkeletonLoading>
              )
            })}
          </SimpleGrid>
        )
      case 'default':
        return (
          <SkeletonLoading
            startColor={colors.skeleton.initial[colorMode]}
            endColor={colors.skeleton.end[colorMode]}
            fadeDuration={0.8}
            speed={1}
            {...props}
          >
            {children}
          </SkeletonLoading>
        )
      default:
        return null
    }
  }
  return renderSkeleton()
}

Skeleton.defaultProps = defaultProps

export { Skeleton }
