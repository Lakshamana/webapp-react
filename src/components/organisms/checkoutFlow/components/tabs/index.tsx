import { Flex, Link } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { useCheckoutStore } from 'services/stores/checkout'
import { colors } from 'styles'
import { ColorMode } from 'types/common'
import { Steps } from '../../types'
import { PaymentSteps } from '../../utils'

type Props = {
  colorMode: ColorMode
}

const Tabs = ({ colorMode }: Props) => {
  const {
    currentStep,
    setCurrentStep,
    selectedPrice,
    personalInfo,
    selectedProduct,
  } = useCheckoutStore()
  const renderIcon = (itemStep) => {
    switch (itemStep) {
      case Steps.SELECT_PRODUCT:
        return selectedPrice ? (
          <Icon icon="mdi:checkbox-marked-circle-outline" />
        ) : null
      case Steps.PERSONAL_INFORMATION:
        return personalInfo ? (
          <Icon icon="mdi:checkbox-marked-circle-outline" />
        ) : null
    }
  }

  const handleClick = (step: Steps) => {
    switch (step) {
      case Steps.SELECT_PRODUCT:
        return setCurrentStep(Steps.SELECT_PRODUCT)
      case Steps.PERSONAL_INFORMATION:
        if (selectedProduct) setCurrentStep(Steps.PERSONAL_INFORMATION)
        return
      case Steps.PAYMENT:
        if (selectedProduct && personalInfo) setCurrentStep(Steps.PAYMENT)
        return
    }
  }

  return (
    <Flex gridGap={12} mt={4} mb={2}>
      {PaymentSteps.map((item) => (
        <Link
          width={'auto'}
          key={item.label}
          onClick={() => handleClick(item.step)}
          variant="link"
          fontSize={'1.18rem'}
          color={
            item.step === currentStep
              ? colors.brand.primary[colorMode]
              : colors.secondaryText[colorMode]
          }
        >
          <Flex alignItems={'center'} gridGap={1}>
            {renderIcon(item.step)}
            {item.label}
          </Flex>
        </Link>
      ))}
    </Flex>
  )
}

export { Tabs }
