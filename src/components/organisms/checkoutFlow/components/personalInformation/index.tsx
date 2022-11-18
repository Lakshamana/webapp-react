import { useMutation } from '@apollo/client'
import { Box, Flex } from '@chakra-ui/react'
import { Button, Input } from 'components'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import PhoneInput from 'react-phone-input-2'
import { MUTATION_CREATE_ACCOUNT, MUTATION_VERIFY_MAIL } from 'services/graphql'
import { useAuthStore, useThemeStore } from 'services/stores'
import { useCheckoutStore } from 'services/stores/checkout'
import { colors } from 'styles'
import { sendAuthReport } from 'utils/analytics'
import { Steps } from '../../types'
import { SelectedProductAndPriceInfo } from '../selectedProductAndPriceInfo'
import { validationSchema } from './settings'

const PersonalInformation = () => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { account, isAnonymousAccess } = useAuthStore()
  const { setPersonalInfo, personalInfo, setCurrentStep } = useCheckoutStore()

  const [verifyMail, { loading: verifyMailLoading }] = useMutation(
    MUTATION_VERIFY_MAIL,
    {
      onCompleted: async (result) => {
        //TODO: Create an account if emails dont exists
      },
    }
  )

  const [createAccount, { loading: createAccountLoading }] = useMutation(
    MUTATION_CREATE_ACCOUNT,
    {
      onCompleted: async (result) => {
        if (result.createAccount) {
          sendAuthReport({
            email: formik.values.email,
            kind: 'signup-simplified',
          })
        }
      },
    }
  )

  const initialValues = {
    fullName: personalInfo?.fullName || account?.first_name || '',
    email: personalInfo?.email || account?.email || '',
    phoneNumber:
      personalInfo?.phoneNumber || account?.profile?.custom_fields?.phone || '',
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async () => {
      if (isAnonymousAccess) {
        verifyMail({
          variables: {
            payload: {
              email: formik.values.email,
            },
          },
        })
      }
      setPersonalInfo({ ...formik.values })
      setCurrentStep(Steps.PAYMENT)
    },
  })

  const isButtonDisabled = !(formik.dirty && formik.isValid)

  return (
    <Flex direction="column" gridGap={2} width="100%" maxW={'600px'} pt={4}>
      <SelectedProductAndPriceInfo {...{ colorMode }} />
      <Flex direction={'column'} mt={8} gridGap={2}>
        <Input
          name="fullName"
          type="text"
          placeholder="Full name"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.errors.fullName}
          error={!!formik.errors.fullName && formik.touched.fullName}
        />
        <Flex gridGap={2}>
          <Input
            name="email"
            type="text"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={formik.errors.email}
            error={!!formik.errors.email && formik.touched.email}
          />
          <PhoneInput
            enableSearch={true}
            onChange={(value) => formik.setFieldValue('phoneNumber', value)}
            onBlur={formik.handleBlur}
            value={personalInfo?.phoneNumber}
            country={'BR'}
            preferredCountries={['br', 'us']}
            placeholder="Phone number"
            inputStyle={{
              color: colors.generalText[colorMode],
              background: colors.inputBg[colorMode],
              border: 'none',
              width: '100%',
              fontSize: '16px',
              paddingLeft: '60px',
              paddingTop: '16px',
              paddingBottom: '16px',
            }}
          />
        </Flex>
      </Flex>
      <Box mt={5} display="flex" justifyContent="center">
        <Button
          onClick={() => formik.handleSubmit()}
          isDisabled={isButtonDisabled}
          isLoading={verifyMailLoading}
          variant={isButtonDisabled ? 'outline' : 'solid'}
          width={'600px'}
          label="Next"
        />
      </Box>
    </Flex>
  )
}

export { PersonalInformation }
