import { Divider, Flex, Text } from '@chakra-ui/react'
import axios from 'axios'
import { Button, Checkbox, Input, SelectInputStyle } from 'components'
import {
  HEADERS,
  INSPIRE_PAYMENT_API,
  MONTHS
} from 'components/organisms/checkoutFlow/utils'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import {
  bexValidationSchema,
  initialValues,
  stripeValidationSchema
} from './settings'
import { InputSpreedly } from './style'
import { IBankCardForm, PmDataType, Props, SpreedlyError } from './types'

const { REACT_APP_SPREEDLY_KEY } = process.env

const BankCardForm = ({
  productPrice,
  product,
  sendConfirmOrderPayload,
  paymentType,
  isLoadingOrder,
}: Props) => {
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  // @ts-ignore
  const { Spreedly } = window
  const [state, setState] = useState({
    paymentErrors: [],
    paymentProcessing: false,
    paymentCaptured: false,
    route: 'credit-card',
  })
  const [spreedlyError, setspreedlyError] = useState<SpreedlyError>({
    allow_blank_name: '',
    allow_expired_date: '',
    cardType: '',
    cvvLength: 0,
    luhnValid: true,
    numberLength: 0,
    validCvv: true,
    validNumber: true,
  })
  const [allCountries, setallCountries] = useState([])
  const [allStatesById, setallStatesById] = useState([])

  const years = [...new Array(100)].map(
    (_, index) => new Date().getFullYear() + index
  )
  const formatMonth = (month: number) => (month < 10 ? `0${month}` : `${month}`)
  const [disabledButton, setDisabledButton] = useState(true)

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
      setDisabledButton(false)
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
      setDisabledButton(false)
      resetForm()

      const errorMessages = errors.map((err: any) => err.message)
      setState({ ...state, paymentErrors: errorMessages })
    })

    Spreedly.on('paymentMethod', (token: string, pmData: PmDataType) => {
      const { card_type, last_four_digits, month, year } = pmData

      const billingAddress = {
        countryId: pmData.country,
        ...(paymentType === 'Bexs' && {
          address1: pmData.address1,
          address2: pmData.address2,
          city: pmData.city,
          stateId: pmData.state,
          countryId: pmData.country,
          zipCode: pmData.metadata.postalCode,
          neighborhood: pmData.metadata.neighborhood,
          streetNumber: pmData.metadata.streetNumber,
        }),
      }

      sendConfirmOrderPayload({
        variables: {
          payload: {
            paymentMethodType: 'CREDIT_CARD',
            cardBrand: card_type,
            cardHolderName: pmData.full_name,
            lastDigits: last_four_digits,
            expirationDate: `${year}/${formatMonth(month)}`,
            paymentGatewayToken: token,
            productPrice,
            product,
            ...(paymentType === 'Bexs' && { cpf: pmData.metadata.cpf }),
            phone: pmData.phone_number,
            billingAddress,
          },
        },
      })
    })

    Spreedly.on('validation', (inputProperties: SpreedlyError) => {
      setspreedlyError(inputProperties)
    })
  }

  const submitPaymentForm = (
    values: IBankCardForm
    // actions: FormikHelpers<cardForm>
  ) => {
    Spreedly.validate()
    const requiredFields: any = {
      ...values,
      metadata: {
        cpf: values.cpf,
        neighborhood: values.district,
        postalCode: values.zip,
        streetNumber: values.number,
      },
    }
    Spreedly.tokenizeCreditCard(requiredFields)
    setState({ ...state, paymentProcessing: false })
  }

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    dirty,
    isValid,
  } = useFormik({
    initialValues,
    validationSchema:
      paymentType === 'Bexs' ? bexValidationSchema : stripeValidationSchema,
    validateOnChange: true,
    onSubmit: submitPaymentForm,
  })

  const getCountries = async () => {
    const result = await axios.get(`${INSPIRE_PAYMENT_API}/countries`, HEADERS)
    const options = result.data.body.data.map(({ id, name }) => ({
      value: id,
      label: name,
    }))
    setallCountries(options)
  }

  const getStatesById = async (id: string) => {
    const result = await axios.get(
      `${INSPIRE_PAYMENT_API}/states?countryId=${id}`,
      HEADERS
    )
    const options = result.data.body.data.map(({ id, name }) => ({
      value: id,
      label: name,
    }))
    setallStatesById(options)
  }

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <Flex
      flex="1"
      borderRadius="8px"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gridGap="1em"
    >
      <Input
        name="full_name"
        type="text"
        value={values.full_name}
        placeholder={t('page.checkout.card_info.card_name')}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.full_name}
        error={!!errors.full_name && touched.full_name}
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

      <Divider py={2} color={colors.cardBg[colorMode]} />

      {paymentType === 'Bexs' && (
        <>
          <Flex gridGap="1em" w="100%">
            <Input
              name="cpf"
              type="text"
              value={values.cpf}
              placeholder={t('page.checkout.card_info.CPF')}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errors.cpf}
              error={!!errors.cpf && touched.cpf}
            />
            <Input
              name="phone_number"
              type="text"
              value={values.phone_number}
              placeholder={t('common.custom_field.phone')}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errors.phone_number}
              error={!!errors.phone_number && touched.phone_number}
            />
          </Flex>
          <Flex gridGap="1em" w="100%">
            <SelectInputStyle
              name="country"
              placeholder={t('page.checkout.card_info.country')}
              value={values.country}
              options={allCountries}
              onChange={(e) => {
                handleChange(e)
                getStatesById(e.target.value)
              }}
              onBlur={handleBlur}
              errorBorderColor="#d9534f"
              isInvalid={!!errors.country && touched.country}
            />
            <SelectInputStyle
              name="state"
              placeholder={t('page.checkout.card_info.state')}
              value={values.state}
              options={allStatesById}
              onChange={handleChange}
              onBlur={handleBlur}
              errorBorderColor="#d9534f"
              isInvalid={!!errors.state && touched.state}
            />
          </Flex>
          <Flex gridGap="1em" w="100%">
            <Input
              name="city"
              type="text"
              value={values.city}
              placeholder={t('page.checkout.card_info.city')}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errors.city}
              error={!!errors.city && touched.city}
            />
            <Input
              name="zip"
              type="text"
              value={values.zip}
              placeholder={t('page.checkout.card_info.zip_code')}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errors.zip}
              error={!!errors.zip && touched.zip}
            />
          </Flex>
          <Input
            name="address1"
            type="text"
            value={values.address1}
            placeholder={t('page.checkout.card_info.address01')}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.address1}
            error={!!errors.address1 && touched.address1}
          />
          <Input
            name="address2"
            type="text"
            value={values.address2}
            placeholder={t('page.checkout.card_info.address02')}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.address2}
            error={!!errors.address2 && touched.address2}
          />
          <Flex gridGap="1em" w="100%">
            <Input
              name="number"
              type="text"
              value={values.number}
              placeholder={t('page.checkout.card_info.number')}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errors.number}
              error={!!errors.number && touched.number}
            />
            <Input
              name="district"
              type="text"
              value={values.district}
              placeholder={t('page.checkout.card_info.district')}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errors.district}
              error={!!errors.district && touched.district}
            />
          </Flex>
        </>
      )}

      {paymentType === 'Stripe' && (
        <>
          <Flex gridGap="1em" w="100%">
            <Input
              name="phone_number"
              type="text"
              value={values.phone_number}
              placeholder={t('common.custom_field.phone')}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errors.phone_number}
              error={!!errors.phone_number && touched.phone_number}
            />
            <SelectInputStyle
              name="country"
              placeholder={t('page.checkout.card_info.country')}
              value={values.country}
              options={allCountries}
              onChange={(e) => {
                handleChange(e)
                getStatesById(e.target.value)
              }}
              onBlur={handleBlur}
              errorBorderColor="#d9534f"
              isInvalid={!!errors.country && touched.country}
            />
          </Flex>
          <Input
            name="address1"
            type="text"
            value={values.address1}
            placeholder={t('page.checkout.card_info.address01')}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.address1}
            error={!!errors.address1 && touched.address1}
          />
        </>
      )}

      <Flex my="1em">
        <Checkbox
          name="terms"
          isChecked={values.terms}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={!!errors.terms && touched.terms}
          label={t('page.checkout.card_info.authorize')}
        />
      </Flex>

      <Button
        mb={5}
        width="auto"
        disabled={disabledButton || !(dirty && isValid)}
        isLoading={isLoadingOrder}
        loadingText={t('page.checkout.actions.processing_your_payment')}
        onClick={() => handleSubmit()}
        backgroundColor="#D0021B"
      >
        {t('page.checkout.card_info.place_you_order')}
      </Button>
    </Flex>
  )
}

export { BankCardForm }
