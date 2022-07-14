import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import imageBg from 'assets/background/bg-checkout-login.png'
import { Input, SelectInputStyle } from 'components'
import { ModalNotification, ModalType } from '../components/notification'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { useEffect, useState } from 'react'
import { InputSpreedly } from './style'
import { FormikHelpers, useFormik } from 'formik'
import * as Yup from 'yup'
import { cardForm, SpreedlyError } from './types'

const { REACT_APP_SPREEDLY_KEY } = process.env

export const CardInfo = () => {
  const [modalType] = useState(ModalType.success)
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
    allow_blank_name: "",
    allow_expired_date: "",
    cardType: "",
    cvvLength: 0,
    luhnValid: true,
    numberLength: 0,
    validCvv: true,
    validNumber: true,
  })

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

      // refresh the form
      Spreedly.reload()
      setdisabledButton(false)
      resetForm()

      const errorMessages = errors.map((err: any) => err.message)
      setstate({ ...state, paymentErrors: errorMessages })
    })

    Spreedly.on('paymentMethod', (token: string, pmData: any) => {
      // continuar implementação da chamada
      setdisabledButton(false)
      onOpen()
      console.log('tokenizeCreditCard: ', token)
      console.log(pmData)
    })

    Spreedly.on('validation', (inputProperties: SpreedlyError) => {
      setspreedlyError(inputProperties)
    });
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
    <Flex flexDirection="column" alignItems="center">
      {/* <Flex color="white" gridGap="3em" alignItems="center">
        <pre>{JSON.stringify(values, null, 2) }</pre>
        <pre>{JSON.stringify(errors, null, 2) }</pre>
      </Flex> */}
      <Text
        fontSize="32px"
        fontWeight="700"
        mt="30px"
        textAlign="center"
        color={colors.generalText[colorMode]}
      >
        {t('page.checkout.card_info.title')}
      </Text>
      <Text
        fontSize="16px"
        fontWeight="400"
        mb="40px"
        textAlign="center"
        color={colors.generalText[colorMode]}
      >
        {t('page.checkout.card_info.subtitle')}
      </Text>

      <Flex
        w={['auto', 'auto', 'auto', 'auto', '980px']}
        borderRadius="8px"
        boxShadow={[
          'none',
          'none',
          'none',
          'none',
          '0px 4px 4px rgba(0, 0, 0, 0.25)',
        ]}
        flexDir={['column', 'column', 'column', 'column', 'row']}
        p={['1em', '1em', '1em', '1em', '0']}
      >
        <Flex
          maxW={['auto', 'auto', 'auto', 'auto', '490px']}
          w="100%"
          borderRadius={['8px', '8px', '8px', '8px', '8px 0 0 8px']}
          flexDirection="column"
          justifyContent="flex-end"
          padding="32px"
          backgroundImage={`url(${imageBg})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          color="#fff"
          mb={['1em', '1em', '1em', '1em', '0']}
        >
          <Text fontSize="30px" fontWeight="400">
            ABS Monthly Plan Lorem ipsum
          </Text>
          <Text fontSize="18px" fontWeight="400">
            Flamengo - Campeonato Carioca
          </Text>
          <Flex justifyContent="space-between" alignItems="center" mt="36px">
            <Text fontSize="14px" fontWeight="700">
              More Info
            </Text>
            <Flex alignItems="center">
              <Text fontSize="24px" fontWeight="400">
                $12,99
              </Text>
              <Text>/mo</Text>
            </Flex>
          </Flex>
          <Divider my="20px" />
          <Text fontSize="12px" fontWeight="400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua,
          </Text>
        </Flex>
        <Flex
          flex="1"
          borderRadius={['8px', '8px', '8px', '8px', '0 8px 8px 0']}
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          bg={colors.cardBg[colorMode]}
          padding="36px"
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
          <InputSpreedly id="spreedly-number" w="100%" mb="8px" error={!spreedlyError.validNumber}/>
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
            <InputSpreedly id="spreedly-cvv" w="110px" error={!spreedlyError.validCvv}/>
          </Flex>
          {/* <Divider color={colors.secondaryText[colorMode]} />

          <Input
            name="payload.password"
            type="text"
            placeholder={t('page.checkout.card_info.full_name')}
          />

          <Flex w="100%" gridGap="1em">
            <Input
              name="payload.password"
              type="text"
              placeholder={t('page.checkout.card_info.email')}
            />
            <Input
              name="payload.password"
              type="text"
              placeholder={t('page.checkout.card_info.CPF')}
            />
          </Flex> */}

          <Flex alignItems="flex-start" gridGap="12px" mt="1em">
            <Checkbox
              fontSize="12px"
              name="terms"
              isChecked={values.terms}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={
                !!errors.terms &&
                touched.terms
              }
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
        </Flex>
      </Flex>
      <ModalNotification {...{ isOpen, onOpen, onClose, modalType }} />
    </Flex>
  )
}
