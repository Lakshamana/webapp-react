import { Box, Flex, Text } from '@chakra-ui/react'
import axios from 'axios'
import { Input, SelectInputStyle } from 'components'
import {
  HEADERS,
  INSPIRE_PAYMENT_API
} from 'components/organisms/checkoutFlow/utils'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useCheckoutStore } from 'services/stores/checkout'
import { colors } from 'styles'
import { ColorMode } from 'types/common'
import { validationSchema } from './settings'

const BRAZIL_ID = '8b49702a-a52f-4753-955a-336a4bd4714b'

type Props = {
  colorMode: ColorMode
}

const BillingInformationBexs = ({ colorMode }: Props) => {
  const { t } = useTranslation()
  const { setBillingInformationBexs, billingInformationBexs } = useCheckoutStore()
  const [allStatesById, setAllStatesById] = useState([])

  const onSubmit = () => {
    const payload = {
      cpf: formik.values.cpf,
      address1: formik.values.address1,
      address2: formik.values?.address2,
      city: formik.values.city,
      stateId: formik.values.state,
      countryId: BRAZIL_ID,
      zip: formik.values.zip,
      neighborhood: formik.values.district,
      streetNumber: formik.values.number,
    }

    setBillingInformationBexs({ ...payload })
  }

  const initialValues = {
    cpf: billingInformationBexs?.cpf,
    country: billingInformationBexs?.countryId,
    address1: billingInformationBexs?.address1,
    address2: billingInformationBexs?.address2,
    number: billingInformationBexs?.streetNumber,
    zip: billingInformationBexs?.zip,
    district: billingInformationBexs?.district,
    city: billingInformationBexs?.city,
    state: billingInformationBexs?.stateId,
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

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSubmit()
    }, 2000)

    return () => clearTimeout(delayDebounceFn)
    //eslint-disable-next-line
  }, [formik.values])

  return (
    <Flex
      flex="1"
      mb={8}
      borderRadius="8px"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gridGap={2}
    >
      <Box width="100%">
        <Text
          color={colors.generalText[colorMode]}
          fontSize="1.3rem"
          textAlign={'left'}
          mb={2}
        >
          Billing Information
        </Text>
      </Box>
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
    </Flex>
  )
}

export { BillingInformationBexs }
