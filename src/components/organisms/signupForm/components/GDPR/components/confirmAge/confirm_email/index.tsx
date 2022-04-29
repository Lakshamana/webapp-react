import { Flex } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores/theme'
import { useOrganizationStore } from 'services/stores'
import { Button, Text, Input } from 'components'
import { ConfirmAgeProps } from './types'
import { sizes, colors } from 'styles'
import { initialValues, validationSchema } from './settings'
import { useEffect } from 'react'

const ConfirmEmail = ({
  handleFormSubmit,
  gdprAge,
  userEmail,
  onCancel,
}: ConfirmAgeProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { organization } = useOrganizationStore()

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    dirty,
    isValid,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      ...initialValues,
    },
    validationSchema,
    validateOnChange: true,
    onSubmit: async () => {
      handleFormSubmit()
    },
  })

  useEffect(() => {
    setFieldValue('email', userEmail)
    // eslint-disable-next-line
  }, [userEmail])

  return (
    <Flex alignItems={'center'} flexDirection={'column'} gridGap={5}>
      <Text
        fontSize={24}
        textAlign={'center'}
        fontWeight={'bolder'}
        color={'white'}
      >
        {t('signup.reconfirm_age_email.title')}
      </Text>
      <Text
        fontSize={16}
        marginBottom={'5px'}
        textAlign={'center'}
        color={colors.secondaryText[colorMode]}
      >
        {t('signup.reconfirm_age_email.subtitle')}
      </Text>
      <Text
        fontSize={16}
        marginBottom={15}
        textAlign={'center'}
        color={colors.secondaryText[colorMode]}
      >
        {t('signup.reconfirm_age_email.age_declaration', {
          age: gdprAge,
          organization: organization?.name,
        })}
      </Text>
      <Input
        name="confirm_email"
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        value={values.confirm_email}
        placeholder={t('signin.label.email')}
        errorMessage={errors.confirm_email}
        error={!!errors.confirm_email && touched.confirm_email}
      />
      <Text
        fontSize={16}
        marginBottom={30}
        textAlign={'center'}
        color={colors.secondaryText[colorMode]}
      >
        {t('signup.reconfirm_age_email.warning', {
          organization: organization?.name,
        })}
      </Text>
      <Button
        width={[sizes.loginButtonWidth]}
        type={'submit'}
        label={t('common.agree')}
        onClick={() => handleSubmit}
        isDisabled={!(dirty && isValid)}
      ></Button>
      <Button
        width={[sizes.loginButtonWidth]}
        variant="ghost"
        label={t('common.cancel_registration')}
        onClick={onCancel}
      ></Button>
    </Flex>
  )
}

export { ConfirmEmail }
