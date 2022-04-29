import { SkeletonProps } from '@chakra-ui/skeleton';

export interface Props extends SkeletonProps {
    numberOfCards?: number
    kind: SkeletonKind
}

export type SkeletonKind = 'default' | 'cards' | 'posts'

export const defaultProps = {
    kind: 'default'
}