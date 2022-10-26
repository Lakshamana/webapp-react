import { Flex, Text } from '@chakra-ui/react'
import { Button, SignupForm } from 'components'
import { Steps } from 'modules/simplifiedCheckout/types'
import { useTranslation } from 'react-i18next'
import { colors } from 'styles'
import { ColorMode } from 'types/common'

type Props = {
  colorMode: ColorMode
  setCurrentStep: (step: Steps) => void
}

const CheckoutSignup = ({ colorMode, setCurrentStep }: Props) => {
  const { t } = useTranslation()
  return (
    <Flex direction={'column'} pt={10} px={16}>
      <SignupForm />
      <Flex
        flexDir="row"
        width="100%"
        alignItems={'center'}
        justifyContent="center"
        my={5}
      >
        <Text color={colors.generalText[colorMode]} paddingRight={1}>
          {t('signup.registration.already_have_account')}
        </Text>
        <Button
          width={'auto'}
          onClick={() => setCurrentStep(Steps.LOGIN)}
          variant="link"
          label={t('signup.actions.signin_here')}
        />
      </Flex>
    </Flex>
  )
}

export { CheckoutSignup }
