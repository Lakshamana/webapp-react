import { useLazyQuery, useMutation } from '@apollo/client'
import { Button, Checkbox, Divider, Flex, Text, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import { Input, SelectInputStyle } from 'components'
import { useFormik } from 'formik'
import { ModalType } from 'modules/checkout/components/notification'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MUTATION_CONFIRM_ORDER, QUERY_GET_ORDER_RESULT } from 'services/graphql'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import * as Yup from 'yup'
import { ModalNotification } from '../components'
import { InputSpreedly } from './style'
import { cardForm, OrderType, pmDataType, Props, SpreedlyError } from './types.d'

const { REACT_APP_SPREEDLY_KEY } = process.env
const INSPIRE_PAYMENT_API = 'https://api-payment-staging.inspireplatform.io'
const HEADERS = { headers: { tenant: 'Marvel-wu61z', }, }
const MONTHS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

export const CardInfoSpreedly = ({
  productPrice,
  product
}: Props) => {
  const [modalType, setmodalType] = useState(ModalType.success)
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  // @ts-ignore
  const { Spreedly } = window
  const [state, setstate] = useState({
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

  const [getOrderResult, { data: orderResult, loading: orderLoading, stopPolling },
  ] = useLazyQuery(QUERY_GET_ORDER_RESULT, {
    fetchPolicy: 'network-only',
    pollInterval: 5000,
  })

  useEffect(() => {
    if (orderResult) {
      const { status } = orderResult?.order
      if (status === OrderType.active) {
        if (stopPolling) stopPolling()
        setmodalType(ModalType.success)
        onOpen()
        return
      }

      if (status === OrderType.failed) {
        if (stopPolling) stopPolling()
        setdisabledButton(false)
        setmodalType(ModalType.failure)
        onOpen()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderResult, orderLoading])

  const [confirmOrder] = useMutation(
    MUTATION_CONFIRM_ORDER,
    {
      onCompleted: async (result) => {
        const { confirmOrder: { id } } = result
        getOrderResult({ variables: { id } })
      },
      onError: () => {
        setmodalType(ModalType.failure)
        setdisabledButton(false)
      },
    }
  )

  const years = [...new Array(100)].map(
    (_, index) => new Date().getFullYear() + index
  )
  const formatMonth = (month: number) => month < 10 ? `0${month}` : `${month}`
  const [disabledButton, setdisabledButton] = useState(true)

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
      setdisabledButton(false)
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
      // testing
      // Spreedly.setValue('number', '4111111111111111');
      // Spreedly.setValue('cvv', '123');
    })

    Spreedly.on('errors', (errors: any) => {
      for (let i = 0; i < errors.length; i++) {
        var error = errors[i]
        console.log(error)
      }

      setstate({ ...state, paymentProcessing: false })

      Spreedly.reload()
      setdisabledButton(false)
      resetForm()

      const errorMessages = errors.map((err: any) => err.message)
      setstate({ ...state, paymentErrors: errorMessages })
    })

    Spreedly.on('paymentMethod', (token: string, pmData: pmDataType) => {
      const { card_type, last_four_digits, month, year } = pmData
      confirmOrder({
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
            cpf: pmData.metadata.cpf,
            phone: pmData.phone_number,
            billingAddress: {
              address1: pmData.address1,
              address2: pmData.address2,
              city: pmData.city,
              stateId: pmData.state,
              countryId: pmData.country,
              zipCode: pmData.metadata.postalCode,
              neighborhood: pmData.metadata.neighborhood,
              streetNumber: pmData.metadata.streetNumber,
            }
          }
        }
      })
    })

    Spreedly.on('validation', (inputProperties: SpreedlyError) => {
      setspreedlyError(inputProperties)
    })
  }

  const submitPaymentForm = (
    values: cardForm,
    // actions: FormikHelpers<cardForm>
  ) => {
    Spreedly.validate()
    setdisabledButton(true)
    const requiredFields: any = {
      ...values,
      metadata: {
        cpf: values.cpf,
        neighborhood: values.district,
        postalCode: values.zip,
        streetNumber: values.number,
      }
    }
    Spreedly.tokenizeCreditCard(requiredFields)
    setstate({ ...state, paymentProcessing: false })
  }

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      full_name: '',
      month: '',
      year: '',
      email: '',
      cpf: '',
      country: '',
      address1: '',
      address2: '',
      number: '',
      zip: '',
      district: '',
      city: '',
      state: '',
      terms: false,
      phone_number: '',
    },
    validationSchema: Yup.object({
      phone_number: Yup.string()
        .required(
          t('common.error.field_required', {
            field_name: t('common.custom_field.phone'),
          })
        ),
      full_name: Yup.string().required(
        t('page.checkout.card_info.mistakes.full_name_required')
      ),
      month: Yup.string().required(
        t('page.checkout.card_info.mistakes.month_required')
      ),
      year: Yup.string().required(
        t('page.checkout.card_info.mistakes.year_required')
      ),
      email: Yup.string()
        .required(
          t('common.error.field_required', {
            field_name: t('page.checkout.card_info.email'),
          })
        )
        .email(t('common.error.valid_email')),
      cpf: Yup.string()
        .required(
          t('common.error.field_required', {
            field_name: t('page.checkout.card_info.CPF'),
          })
        ),
      country: Yup.string()
        .required(
          t('common.error.field_required', {
            field_name: t('page.checkout.card_info.country'),
          })
        ),
      state: Yup.string()
        .required(
          t('common.error.field_required', {
            field_name: t('page.checkout.card_info.state'),
          })
        ),
      address1: Yup.string()
        .required(
          t('common.error.field_required', {
            field_name: t('page.checkout.card_info.address01'),
          })
        ),
      address2: Yup.string()
        .required(
          t('common.error.field_required', {
            field_name: t('page.checkout.card_info.address02'),
          })
        ),
      number: Yup.string()
        .required(
          t('common.error.field_required', {
            field_name: t('page.checkout.card_info.number'),
          })
        ),
      zip: Yup.string()
        .required(
          t('common.error.field_required', {
            field_name: t('page.checkout.card_info.zip_code'),
          })
        ),
      district: Yup.string()
        .required(
          t('common.error.field_required', {
            field_name: t('page.checkout.card_info.district'),
          })
        ),
      city: Yup.string()
        .required(
          t('common.error.field_required', {
            field_name: t('page.checkout.card_info.city'),
          })
        ),
      terms: Yup.bool().oneOf(
        [true],
        t('common.error.accept_terms_and_conditions')
      ),
    }),
    onSubmit: submitPaymentForm,
  })

  const getCountries = async () => {
    const result = await axios.get(`${INSPIRE_PAYMENT_API}/countries`, HEADERS)
    const options = result.data.body.data.map(({ id, name }) => ({ value: id, label: name }))
    setallCountries(options)
  }

  const getStatesById = async (id: string) => {
    const result = await axios.get(
      `${INSPIRE_PAYMENT_API}/states?countryId=${id}`,
      HEADERS
    )
    const options = result.data.body.data.map(({ id, name }) => ({ value: id, label: name }))
    setallStatesById(options)
  }

  useEffect(() => { getCountries() }, [])

  return (
    <>
      <ModalNotification {...{ isOpen, onClose, modalType }} />
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
        <Divider />
        <Flex gridGap="1em" w="100%">
          <Input
            name="email"
            type="text"
            value={values.email}
            placeholder={t('page.checkout.card_info.email')}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.email}
            error={!!errors.email && touched.email}
          />
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
        </Flex>
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
            handleChange(e);
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
          name="zip"
          type="text"
          value={values.zip}
          placeholder={t('page.checkout.card_info.zip_code')}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={errors.zip}
          error={!!errors.zip && touched.zip}
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
        <Flex alignItems="flex-start" gridGap="12px" mt="1em">
          <Checkbox
            fontSize="12px"
            name="terms"
            id="terms"
            isChecked={values.terms}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={!!errors.terms && touched.terms}
          />
          <Text htmlFor='terms' fontSize="12px" color={colors.generalText[colorMode]}>
            {t('page.checkout.card_info.authorize')}
          </Text>
        </Flex>
        <Button
          textTransform="uppercase"
          height="56px"
          width="236px"
          disabled={disabledButton}
          isLoading={disabledButton}
          onClick={() => handleSubmit()}
          backgroundColor="#D0021B"
          color="white"
          _hover={{ bg: '#9B84FE' }}
          _disabled={{ bg: '#A4A4A4' }}
          _active={{ bg: '#9B84FE' }}
        >
          {t('page.checkout.card_info.place_you_order')}
        </Button>
      </Flex>
    </>
  )
}