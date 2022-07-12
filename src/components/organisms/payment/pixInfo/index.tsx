import { useLazyQuery, useMutation } from '@apollo/client'
import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import axios from 'axios'
import { Input, SelectInputStyle } from 'components'
import { useFormik } from 'formik'
import { ModalType } from 'modules/checkout/components/notification'
import { QRCodeSVG } from 'qrcode.react'
import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useTranslation } from 'react-i18next'
import { MUTATION_CONFIRM_ORDER, QUERY_GET_ORDER_RESULT } from 'services/graphql'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import * as Yup from 'yup'
import { ModalNotification } from '../components'
import { cardForm, OrderType, Props } from './types.d'

const INSPIRE_PAYMENT_API = 'https://api-payment-staging.inspireplatform.io'
const HEADERS = { headers: { tenant: 'Marvel-wu61z', }, }
const BRAZIL_ID = '8b49702a-a52f-4753-955a-336a4bd4714b'

export const PixInfoSpreedly = ({
  productPrice,
  product
}: Props) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const [modalType, setmodalType] = useState(ModalType.success)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [allStatesById, setAllStatesById] = useState([])
  const [disabledButton, setDisabledButton] = useState(false)
  const [copied, setCopied] = useState(false)
  const [qrCode, setQrCode] = useState('')

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
        setDisabledButton(false)
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
        console.log('QUERY', result)
        const { confirmOrder: { subscription: { id, pixQrCodeText } } } = result
        setQrCode(pixQrCodeText)
        getOrderResult({ variables: { id } })
      },
      onError: () => {
        setmodalType(ModalType.failure)
        setDisabledButton(false)
      },
    }
  )

  const onSubmit = (values: cardForm) => {
    const payload = {
      paymentMethodType: 'PIX',
      productPrice,
      product,
      cardHolderName: values.full_name,
      cpf: values.cpf,
      phone: values.phone_number,
      billingAddress: {
        address1: values.address1,
        address2: values?.address2,
        city: values.city,
        stateId: values.state,
        countryId: BRAZIL_ID,
        zipCode: values.zip,
        neighborhood: values.district,
        streetNumber: values.number
      }
    }
    setDisabledButton(true)
    confirmOrder({ variables: { payload } })
  }

  const formik = useFormik({
    initialValues: {
      full_name: '',
      email: '',
      cpf: '',
      phone_number: '',
      country: '',
      address1: '',
      address2: '',
      number: '',
      zip: '',
      district: '',
      city: '',
      state: '',
    },
    validationSchema: Yup.object({
      phone_number: Yup.string()
        .required(
          t('common.error.field_required', {
            field_name: t('common.custom_field.phone'),
          })
        ),
      full_name: Yup.string()
        .required(
          t('page.checkout.card_info.mistakes.full_name_required')
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
      address2: Yup.string(),
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
    }),
    onSubmit,
  })

  const getStatesById = async (id: string) => {
    const result = await axios.get(
      `${INSPIRE_PAYMENT_API}/states?countryId=${id}`,
      HEADERS
    )
    const options = result.data.body.data.map(({ id, name }) => ({ value: id, label: name }))
    setAllStatesById(options)
  }
  useEffect(() => { getStatesById(BRAZIL_ID) }, [])

  return (
    <>
      <ModalNotification {...{ isOpen, onClose, modalType }} />
      {
        qrCode &&
        <Flex
          flex="1"
          borderRadius="8px"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gridGap="1em"
        >
          <Text
            style={{ marginTop: 10 }}
            fontWeight="600"
            color={colors.secondaryText[colorMode]}
            fontSize="14px"
            w="277px"
            textAlign="center"
          >
            Scan this code to pay
          </Text>
          <Text
            style={{ marginTop: 10, marginBottom: 20 }}
            fontWeight="300"
            color={colors.secondaryText[colorMode]}
            fontSize="14px"
            textAlign="center"
          >
            1. Access your Internet Banking or payment app<br />
            2. Choose to pay using PIX<br />
            3. Scan this code
          </Text>
          <QRCodeSVG value={qrCode} />
          <Text
            style={{ marginTop: 20, marginBottom: 10 }}
            fontWeight="600"
            color={colors.secondaryText[colorMode]}
            fontSize="14px"
            textAlign="center"
          >
            Or copy this QR code to make payment
          </Text>
          <Flex alignItems={'center'}>
            <Input
              name="qrCode"
              type="text"
              value={qrCode}
            />
            <CopyToClipboard
              text={qrCode}
              onCopy={() => setCopied(true)}
            >
              <Button
                marginLeft={4}
                marginBottom={2}
                textTransform="uppercase"
                height="50px"
                width="100px"
                backgroundColor="#D0021B"
                color="white"
              >
                {copied ? 'COPIED' : 'COPY'}
              </Button>
            </CopyToClipboard>
          </Flex>
          <Flex
            alignItems={'center'}
            style={{ marginTop: 10, marginBottom: 25 }}
          >
            <Icon
              width={14}
              icon={'bi:shield'}
            />
            <Text
              style={{ marginLeft: 10 }}
              fontWeight="300"
              color={colors.secondaryText[colorMode]}
              fontSize="14px"
              textAlign="center"
            >
              Secure transaction
            </Text>
          </Flex>
        </Flex>
      }
      {
        !qrCode &&
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
            value={formik.values.full_name}
            placeholder={
              'Full name'
              // t('page.checkout.card_info.card_name')
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={formik.errors.full_name}
            error={!!formik.errors.full_name && formik.touched.full_name}
          />
          <Flex gridGap="1em" w="100%">
            <Input
              name="email"
              type="text"
              value={formik.values.email}
              placeholder={t('page.checkout.card_info.email')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.errors.email}
              error={!!formik.errors.email && formik.touched.email}
            />
            <Input
              name="cpf"
              type="text"
              value={formik.values.cpf}
              placeholder={t('page.checkout.card_info.CPF')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.errors.cpf}
              error={!!formik.errors.cpf && formik.touched.cpf}
            />
          </Flex>
          <Input
            name="phone_number"
            type="text"
            value={formik.values.phone_number}
            placeholder={t('common.custom_field.phone')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={formik.errors.phone_number}
            error={!!formik.errors.phone_number && formik.touched.phone_number}
          />
          <SelectInputStyle
            name="state"
            placeholder={t('page.checkout.card_info.state')}
            value={formik.values.state}
            options={allStatesById}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorBorderColor="#d9534f"
            isInvalid={!!formik.errors.state && formik.touched.state}
          />
          <Input
            name="address1"
            type="text"
            value={formik.values.address1}
            placeholder={t('page.checkout.card_info.address01')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={formik.errors.address1}
            error={!!formik.errors.address1 && formik.touched.address1}
          />
          <Input
            name="address2"
            type="text"
            value={formik.values.address2}
            placeholder={t('page.checkout.card_info.address02')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            name="number"
            type="text"
            value={formik.values.number}
            placeholder={t('page.checkout.card_info.number')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={formik.errors.number}
            error={!!formik.errors.number && formik.touched.number}
          />
          <Input
            name="zip"
            type="text"
            value={formik.values.zip}
            placeholder={t('page.checkout.card_info.zip_code')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={formik.errors.zip}
            error={!!formik.errors.zip && formik.touched.zip}
          />
          <Input
            name="district"
            type="text"
            value={formik.values.district}
            placeholder={t('page.checkout.card_info.district')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={formik.errors.district}
            error={!!formik.errors.district && formik.touched.district}
          />
          <Input
            name="city"
            type="text"
            value={formik.values.city}
            placeholder={t('page.checkout.card_info.city')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={formik.errors.city}
            error={!!formik.errors.city && formik.touched.city}
          />
          <Button
            textTransform="uppercase"
            height="56px"
            width="236px"
            disabled={disabledButton}
            isLoading={disabledButton}
            onClick={() => formik.handleSubmit()}
            backgroundColor="#D0021B"
            color="white"
            _hover={{ bg: '#9B84FE' }}
            _disabled={{ bg: '#A4A4A4' }}
            _active={{ bg: '#9B84FE' }}
          >
            {/* {t('page.checkout.card_info.place_you_order')} */}
            {'NEXT'}
          </Button>
        </Flex>
      }
    </>
  )
}