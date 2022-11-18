import { Flex, Text } from '@chakra-ui/react'
import { Checkbox, Input, SelectInputStyle } from 'components'
import { MONTHS } from 'components/organisms/checkoutFlow/utils'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'
import { useCheckoutStore } from 'services/stores/checkout'
import { colors } from 'styles'
import { initialValues, validationSchema } from './settings'
import { InputSpreedly } from './style'
import { IBankCardForm, PmDataType, Props, SpreedlyError } from './types'

const { REACT_APP_SPREEDLY_KEY } = process.env

const BankCardForm = ({ sendConfirmOrderPayload }: Props) => {
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  const {
    paymentType,
    selectedPrice,
    billingInformationBexs,
    billingInformationStripe,
    personalInfo,
    setCcInformation,
  } = useCheckoutStore()
  // @ts-ignore
  const { Spreedly } = window
  const [state, setState] = useState({
    paymentErrors: [],
    paymentProcessing: false,
    paymentCaptured: false,
    route: 'credit-card',
  })

  const [spreedlyError, setSpreedlyError] = useState<SpreedlyError>({
    allow_blank_name: '',
    allow_expired_date: '',
    cardType: '',
    cvvLength: 0,
    luhnValid: true,
    numberLength: 0,
    validCvv: true,
    validNumber: true,
  })

  const years = [...new Array(100)].map(
    (_, index) => new Date().getFullYear() + index
  )
  const formatMonth = (month: number) => (month < 10 ? `0${month}` : `${month}`)

  useEffect(() => {
    if (Spreedly) {
      setupSpreedly()
    }
    return () => Spreedly.removeHandlers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setupSpreedly = () => {
    Spreedly.init(REACT_APP_SPREEDLY_KEY, {
      numberEl: 'spreedly-number',
      cvvEl: 'spreedly-cvv',
    })

    Spreedly.on('ready', () => {
      Spreedly.setParam('allow_blank_name', true)
      Spreedly.setParam('allow_expired_date', true)
      // credit card number
      Spreedly.setPlaceholder(
        'number',
        t('page.checkout.card_info.card_number')
      )
      Spreedly.setFieldType('number', 'text')
      Spreedly.setStyle(
        'number',
        `font-size: 16px; background: transparent; color: ${colors.inputText[colorMode]}; font-size: 1.08rem;`
      )
      Spreedly.setNumberFormat('prettyFormat')
      // cvv
      Spreedly.setPlaceholder('cvv', t('page.checkout.card_info.cvv'))
      Spreedly.setFieldType('cvv', 'text')
      Spreedly.setStyle(
        'cvv',
        `font-size: 16px; background: transparent; color: ${colors.inputText[colorMode]}; font-size: 1.08rem;`
      )
    })

    Spreedly.on('errors', (errors: any) => {
      for (let i = 0; i < errors.length; i++) {
        var error = errors[i]
        console.log(error)
      }

      setState({ ...state, paymentProcessing: false })

      Spreedly.reload()
      resetForm()

      const errorMessages = errors.map((err: any) => err.message)
      setState({ ...state, paymentErrors: errorMessages })
    })

    Spreedly.on('paymentMethod', (token: string, pmData: PmDataType) => {
      const { card_type, last_four_digits, month, year } = pmData

      const billingAddress = {
        ...(paymentType === 'Stripe' && {
          countryId: billingInformationStripe?.countryId,
          address1: billingInformationStripe?.address1,
        }),
        ...(paymentType === 'Bexs' && {
          address1: billingInformationBexs?.address1,
          address2: billingInformationBexs?.address2,
          city: billingInformationBexs?.city,
          stateId: billingInformationBexs?.stateId,
          countryId: billingInformationBexs?.countryId,
          zipCode: billingInformationBexs?.zip,
          neighborhood: billingInformationBexs?.neighborhood,
          streetNumber: billingInformationBexs?.streetNumber,
        }),
      }

      setCcInformation({
        variables: {
          payload: {
            paymentMethodType: 'CREDIT_CARD',
            cardBrand: card_type,
            cardHolderName: pmData.card_holder_name,
            lastDigits: last_four_digits,
            expirationDate: `${year}/${formatMonth(month)}`,
            paymentGatewayToken: token,
            productPrice: selectedPrice?.id,
            product: selectedPrice?.productsId,
            ...(paymentType === 'Bexs' && { cpf: billingInformationBexs?.cpf }),
            phone: personalInfo?.phoneNumber,
            billingAddress,
          },
        },
      })
    })

    Spreedly.on('validation', (inputProperties: SpreedlyError) => {
      setSpreedlyError(inputProperties)
    })
  }

  const submitPaymentForm = (values: IBankCardForm) => {
    Spreedly.validate()
    const requiredFields: any = {
      ...values,
      metadata: {
        cpf: billingInformationBexs?.cpf,
        neighborhood: billingInformationBexs?.neighborhood,
        postalCode: billingInformationBexs?.zip,
        streetNumber: billingInformationBexs?.streetNumber,
      },
    }
    Spreedly.tokenizeCreditCard(requiredFields)
    setState({ ...state, paymentProcessing: false })
  }

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: true,
    onSubmit: submitPaymentForm,
  })

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gridGap={2}
    >
      <Input
        name="card_holder_name"
        type="text"
        value={values.card_holder_name}
        placeholder={t('page.checkout.card_info.card_name')}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.card_holder_name}
        error={!!errors.card_holder_name && touched.card_holder_name}
      />
      <InputSpreedly
        id="spreedly-number"
        w="100%"
        mb="8px"
        error={!spreedlyError.validNumber}
      />
      <Flex gridGap="1em" w="100%">
        <Flex gridGap="0.5em" alignItems="center" w="100%">
          <SelectInputStyle
            name="month"
            placeholder={t('page.checkout.card_info.date_month')}
            value={values.month}
            options={MONTHS.map((value) => ({ value, label: value }))}
            onChange={handleChange}
            onBlur={handleBlur}
            errorBorderColor="#d9534f"
            isInvalid={!!errors.month && touched.month}
          />
          <Text fontSize="24px" color="#E1E1E1">
            /
          </Text>
          <SelectInputStyle
            name="year"
            placeholder={t('page.checkout.card_info.date_year')}
            value={values.year}
            options={years.map((value) => ({ value, label: `${value}` }))}
            onChange={handleChange}
            onBlur={handleBlur}
            errorBorderColor="#d9534f"
            isInvalid={!!errors.year && touched.year}
          />
        </Flex>
        <InputSpreedly
          id="spreedly-cvv"
          w="110px"
          error={!spreedlyError.validCvv}
        />
      </Flex>
      <Flex>
        <Checkbox
          name="terms"
          isChecked={values.terms}
          onChange={handleChange}
          onClick={() => handleSubmit()}
          onBlur={handleBlur}
          isInvalid={!!errors.terms && touched.terms}
          label={t('page.checkout.card_info.authorize')}
        />
      </Flex>
    </Flex>
  )
}

export { BankCardForm }
