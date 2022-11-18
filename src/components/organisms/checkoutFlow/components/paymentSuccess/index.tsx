import { Flex } from '@chakra-ui/react'
import { AlertCard } from 'components/atoms'

const PaymentSuccess = () => {
    return (
        <Flex
        flex="1"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gridGap="1em"
        height={'100%'}
      >
        <AlertCard
          type="success"
          description="Your payment has been successfully processed!"
          title="Payment Success"
          actionLabel={'Enjoy your content'}
          actionVariant="link"
        />
      </Flex>
    )
}

export { PaymentSuccess }
