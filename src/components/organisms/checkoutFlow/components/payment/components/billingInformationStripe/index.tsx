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

type Props = {
  colorMode: ColorMode
}

const BillingInformationStripe = ({ colorMode }: Props) => {
  const { t } = useTranslation()
  const [allCountries, setAllCountries] = useState([])
  const { setBillingInformationStripe, billingInformationStripe } =
    useCheckoutStore()

  const onSubmit = () => {
    const payload = {
      address1: formik.values.address1,
      countryId: formik.values.country,
    }

    setBillingInformationStripe({ ...payload })
  }

  const initialValues = {
    address1: billingInformationStripe?.address1,
    country: billingInformationStripe?.countryId,
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  const getCountries = async () => {
    const result = await axios.get(`${INSPIRE_PAYMENT_API}/countries`, HEADERS)
    const options = result.data.body.data.map(({ id, name }) => ({
      value: id,
      label: name,
    }))
    setAllCountries(options)
  }

  useEffect(() => {
    getCountries()
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
        <SelectInputStyle
          name="country"
          placeholder={t('page.checkout.card_info.country')}
          value={formik.values.country}
          options={allCountries}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorBorderColor="#d9534f"
          isInvalid={!!formik.errors.country && formik.touched.country}
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
      </Flex>
    </Flex>
  )
}

export { BillingInformationStripe }
