import { Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { colors } from 'styles'
import { SelectPriceProps } from '../../types'
import { formatCurrency } from '../../utils'
import { ButtonSelectOption, CardSelectPlan } from './styles'

const SelectPrice = ({
  colorMode,
  productPrices,
  handleSelectPrice,
}: SelectPriceProps) => {
  const { t } = useTranslation()

  return (
    <CardSelectPlan gridGap={4}>
      <Text
        my={2}
        color={colors.generalText[colorMode]}
        textTransform="uppercase"
        fontSize={'1.2rem'}
      >
        {t('page.plan.selectOption.title')}
      </Text>
      {productPrices?.map((option, key) => (
        <ButtonSelectOption onClick={() => handleSelectPrice(option)} key={key}>
          <Text>{option.billingTypes.name}</Text>
          <Text>
            {formatCurrency(option.unitPrice, option.currency.isoCode)}
            {option?.billingPeriods && ` / ${option.billingPeriods.name}`}
          </Text>
        </ButtonSelectOption>
      ))}
    </CardSelectPlan>
  )
}

export { SelectPrice }
