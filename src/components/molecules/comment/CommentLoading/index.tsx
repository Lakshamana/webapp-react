import { Center } from '@chakra-ui/react'
import { Skeleton } from 'components'
import { IProps } from './types'

const CommentLoading = ({ show }: IProps) => (
  <Center mt={4} width="100%" height={'100%'} flexDirection={'column'}>
    {Array.from(Array(show).keys()).map(each => (
      <Skeleton key={each} height='30px' width='100%' my={1} />
    ))}
  </Center>
)

export { CommentLoading }