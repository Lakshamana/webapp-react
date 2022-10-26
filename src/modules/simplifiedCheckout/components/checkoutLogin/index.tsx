import { Flex, Text } from '@chakra-ui/react'
import { Button } from 'components'
import { LoginPage } from 'modules/login'
import { Steps } from 'modules/simplifiedCheckout/types'
import { useTranslation } from 'react-i18next'
import { colors } from 'styles'
import { ColorMode } from 'types/common'

type Props = {
  colorMode: ColorMode
  setCurrentStep: (step: Steps) => void
}

const CheckoutLogin = ({ colorMode, setCurrentStep }: Props) => {
  const { t } = useTranslation()
  return (
    <Flex flexDir={'column'}>
      <LoginPage
        isCheckoutLogin
        userIsLogged={() => setCurrentStep(Steps.PAYMENT)}
      />
      <Flex
        flexDir="row"
        width="100%"
        alignItems={'center'}
        justifyContent="center"
        mb={4}
      >
        <Text
          color={colors.generalText[colorMode]}
          paddingRight={1}
          width="auto"
        >
          {t('signin.label.dont_have_account')}
        </Text>
        <Button
          width={'auto'}
          onClick={() => setCurrentStep(Steps.REGISTER)}
          variant="link"
          label={t('signin.actions.signup_here')}
        />
      </Flex>
    </Flex>
  )
}

export { CheckoutLogin }
