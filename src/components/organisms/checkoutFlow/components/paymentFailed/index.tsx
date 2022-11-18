import { Flex } from '@chakra-ui/react'
import { AlertCard } from 'components/atoms'
import { useCheckoutStore } from 'services/stores/checkout'
import { Steps } from '../../types'

const PaymentFailed = () => {
  const { setCurrentStep } = useCheckoutStore()
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
        type="error"
        description="Seu pagamento não pôde ser processado, por favor tente novamente."
        title="Payment Error"
        actionLabel={'Tentar novamente'}
        actionVariant="link"
        callToAction={() => setCurrentStep(Steps.SELECT_PRODUCT)}
      />
    </Flex>
  )
}

export { PaymentFailed }
