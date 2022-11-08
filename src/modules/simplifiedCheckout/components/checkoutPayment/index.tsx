import { Flex, Text } from '@chakra-ui/react'
import { CheckoutFlow } from 'components'
import { useHistory } from 'react-router-dom'

const CheckoutPayment = ({ product }) => {
  const history = useHistory()
  return (
    <Flex mt={10} w={'100%'} maxW={'800px'} flexDir={'column'}>
      <Flex
        flexDirection="column"
        h={'300px'}
        justifyContent="flex-end"
        borderRadius={'8px'}
        padding={6}
        background={`linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${product?.imageUrl})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        color="#fff"
        mb={['1em', '1em', '1em', '1em', '0']}
      >
        <Text fontSize="1.8rem">{product?.name}</Text>
        <Text fontSize="1.1rem">{product?.description}</Text>
      </Flex>
      <Flex>
        <CheckoutFlow
          {...{ product }}
          simplified
          accessGranted={() => history.push('/')}
        />
      </Flex>
    </Flex>
  )
}

export { CheckoutPayment }
