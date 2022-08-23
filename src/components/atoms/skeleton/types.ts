import { SkeletonProps } from '@chakra-ui/skeleton';

export interface Props extends SkeletonProps {
    numberOfCards?: number
    kind: SkeletonKind
}

export type SkeletonKind = 'default' | 'cards' | 'posts' | 'playlist'

export const defaultProps = {
    kind: 'default'
}