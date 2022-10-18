import { Flex, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import axios from 'axios'
import { Button, Input, SelectInputStyle } from 'components'
import {
  HEADERS,
  INSPIRE_PAYMENT_API
} from 'components/organisms/checkoutFlow/utils'
import { useFormik } from 'formik'
import QRCode from 'qrcode.react'
import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { initialValues, validationSchema } from './settings'
import { cardForm, Props } from './types'

const BRAZIL_ID = '8b49702a-a52f-4753-955a-336a4bd4714b'

const PixForm = ({
  productPrice,
  product,
  qrCode,
  isLoadingOrder,
  sendConfirmOrderPayload,
}: Props) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const [allStatesById, setAllStatesById] = useState([])
  const [copied, setCopied] = useState(false)

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
        streetNumber: values.number,
      },
    }
    sendConfirmOrderPayload({ variables: { payload } })
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  const getStatesById = async (id: string) => {
    const result = await axios.get(
      `${INSPIRE_PAYMENT_API}/states?countryId=${id}`,
      HEADERS
    )
    const options = result.data.body.data.map(({ id, name }) => ({
      value: id,
      label: name,
    }))
    setAllStatesById(options)
  }

  useEffect(() => {
    getStatesById(BRAZIL_ID)
  }, [])

  return (
    <>
      {qrCode && (
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
            {t('page.checkout.pix.scan_code')}
          </Text>
          <Text
            style={{ marginTop: 10, marginBottom: 20 }}
            color={colors.secondaryText[colorMode]}
            fontSize={'0.95rem'}
            textAlign="center"
          >
            1. {t('page.checkout.pix.pix_step_one')}
            <br />
            2. {t('page.checkout.pix.pix_step_two')}
            <br />
            3. {t('page.checkout.pix.pix_step_three')}
          </Text>
          <QRCode value={qrCode} />
          <Text
            mt={6}
            color={colors.secondaryText[colorMode]}
            fontSize={'0.95rem'}
            textAlign="center"
          >
            {t('page.checkout.pix.or_copy_code')}
          </Text>
          <Flex alignItems={'center'}>
            <Input name="qrCode" type="text" value={qrCode} disabled />
            <CopyToClipboard text={qrCode} onCopy={() => setCopied(true)}>
              <Button
                marginLeft={4}
                marginBottom={2}
                width="auto"
                label={copied ? 'COPIED' : 'COPY'}
              />
            </CopyToClipboard>
          </Flex>
          <Flex alignItems={'center'} gridGap={2} my={5}>
            <Icon width={14} icon={'bi:shield'} />
            <Text
              color={colors.secondaryText[colorMode]}
              fontSize={'1rem'}
              textAlign="center"
            >
              Secure transaction
            </Text>
          </Flex>
        </Flex>
      )}
      {!qrCode && (
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
            placeholder={'Full name'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={formik.errors.full_name}
            error={!!formik.errors.full_name && formik.touched.full_name}
          />
          <Flex gridGap="1em" w="100%">
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
            <Input
              name="phone_number"
              type="text"
              value={formik.values.phone_number}
              placeholder={t('common.custom_field.phone')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.errors.phone_number}
              error={
                !!formik.errors.phone_number && formik.touched.phone_number
              }
            />
          </Flex>
          <Flex gridGap="1em" w="100%">
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
              name="city"
              type="text"
              value={formik.values.city}
              placeholder={t('page.checkout.card_info.city')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.errors.city}
              error={!!formik.errors.city && formik.touched.city}
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
          </Flex>
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
          <Flex gridGap="1em" w="100%">
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
              name="district"
              type="text"
              value={formik.values.district}
              placeholder={t('page.checkout.card_info.district')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.errors.district}
              error={!!formik.errors.district && formik.touched.district}
            />
          </Flex>

          <Button
            my={2}
            width="auto"
            disabled={!(formik.dirty && formik.isValid)}
            isLoading={isLoadingOrder}
            onClick={() => formik.handleSubmit()}
            label="next"
          />
        </Flex>
      )}
    </>
  )
}

export { PixForm }
