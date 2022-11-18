import { Flex, Text } from '@chakra-ui/react'
import { Button } from 'components'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'
import { useCheckoutStore } from 'services/stores/checkout'
import { colors } from 'styles'

const BankSlipBarCode = () => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { barCode } = useCheckoutStore()

  return (
    <Flex
      flex="1"
      borderRadius="8px"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gridGap="1em"
    >
      <Text
        mt={2}
        color={colors.generalText[colorMode]}
        fontSize={'1.1rem'}
        textAlign="center"
      >
        {t('page.checkout.bank_slip.step_one')}
      </Text>
      <Flex alignItems={'center'}>
        <Button
          marginLeft={4}
          marginBottom={2}
          width="auto"
          label={t('page.checkout.bank_slip.view')}
          onClick={() =>
            window.open(barCode, '_blank', 'noopener,noreferrer')
          }
        />
      </Flex>
    </Flex>
  )
}

export { BankSlipBarCode }
