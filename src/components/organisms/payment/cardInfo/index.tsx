import { Button, Checkbox, Flex, Text, useDisclosure } from '@chakra-ui/react'
import { Input, SelectInputStyle } from 'components'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { useEffect, useState } from 'react'
import { InputSpreedly } from './style'
import { FormikHelpers, useFormik } from 'formik'
import * as Yup from 'yup'
import { cardForm, SpreedlyError } from './types'
import { ModalType } from 'modules/checkout/components/notification'
import { useMutation } from '@apollo/client'
import { MUTATION_CONFIRM_ORDER } from 'services/graphql'
import { pmDataType, Props } from './types'
import { OrderStatus } from 'generated/graphql'
import { ModalNotification } from '../components'

const { REACT_APP_SPREENDLY_KEY } = process.env

export const CardInfoSpreedly = ({
  productPrice,
  product,
  refetch
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

  const [confirmOrder] = useMutation(
    MUTATION_CONFIRM_ORDER,
    {
      onCompleted: async (result) => {
        setdisabledButton(false)
        const { confirmOrder: { status } } = result
        if(OrderStatus.Active === status) {
          setmodalType(ModalType.success)
          onOpen()
          return
        }
        setmodalType(ModalType.failure)
        onOpen()
      },
      onError: (error) => {
        setmodalType(ModalType.failure)
        setdisabledButton(false)
      },
    }
  )

  const months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ]
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
    Spreedly.init(REACT_APP_SPREENDLY_KEY, {
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

      // refresh the form
      Spreedly.reload()
      setdisabledButton(false)
      resetForm()

      const errorMessages = errors.map((err: any) => err.message)
      setstate({ ...state, paymentErrors: errorMessages })
    })

    Spreedly.on('paymentMethod', (token: string, pmData: pmDataType) => {
      // continuar implementação da chamada
      const { card_type, last_four_digits, month, year } = pmData
      confirmOrder({
        variables: {
          payload: {
            cardBrand: card_type,
            lastDigits: last_four_digits,
            expirationDate: `${year}/${formatMonth(month)}`,
            paymentGatewayToken: token,
            productPrice,
            product,
          }
        }
      })
      onOpen()
      console.log('tokenizeCreditCard: ', token)
      console.log(pmData)
    })

    Spreedly.on('validation', (inputProperties: SpreedlyError) => {
      setspreedlyError(inputProperties)
    })
  }

  const submitPaymentForm = (
    values: cardForm,
    actions: FormikHelpers<cardForm>
  ) => {
    Spreedly.validate()
    setdisabledButton(true)
    const requiredFields: any = values
    Spreedly.tokenizeCreditCard(requiredFields)
    setstate({ ...state, paymentProcessing: true })
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
      terms: false,
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required(
        t('page.checkout.card_info.mistakes.full_name_required')
      ),
      month: Yup.string().required(
        t('page.checkout.card_info.mistakes.month_required')
      ),
      year: Yup.string().required(
        t('page.checkout.card_info.mistakes.year_required')
      ),
      email: Yup.string().email(t('common.error.valid_email')),
      terms: Yup.bool().oneOf(
        [true],
        t('common.error.accept_terms_and_conditions')
      ),
    }),
    onSubmit: submitPaymentForm,
  })

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
            options={months.map((value) => ({ value, label: value }))}
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

      <Flex alignItems="flex-start" gridGap="12px" mt="1em">
        <Checkbox
          fontSize="12px"
          name="terms"
          isChecked={values.terms}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={!!errors.terms && touched.terms}
        />
        <Text fontSize="12px" color={colors.generalText[colorMode]}>
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
      <ModalNotification {...{ isOpen, onClose, modalType, refetch }} />
    </Flex>
  )
}
