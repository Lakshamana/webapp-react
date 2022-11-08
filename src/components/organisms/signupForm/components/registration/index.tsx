import { Flex } from '@chakra-ui/react'
import {
  AlertComponent, Button, Checkbox, Container, Input, Link, SocialSigninButton, Text
} from 'components'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { useCustomizationStore } from 'services/stores'
import { useThemeStore } from 'services/stores/theme'
import { colors, fonts, sizes } from 'styles'
import * as Yup from 'yup'
import { initialValues } from './settings'
import { RegistrationProps } from './types'

const RegistrationForm = ({
  handleFormSubmit,
  handleSocialSignUp,
  dispatchError,
  error,
  isLoading,
}: RegistrationProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { organizationConfig } = useCustomizationStore()

  const renderCheckboxLabel = () => {
    return (
      <>
        {t('common.accept_all')}
        <Link
          paddingX={1}
          to={organizationConfig?.TERMS_URL!}
          label={t('common.terms')}
          isExternal
        />
      </>
    )
  }

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    dirty,
    isValid,
    touched,
  } = useFormik({
    initialValues: {
      ...initialValues,
    },
    validationSchema: Yup.object().shape({
      createAccount: Yup.object().shape({
        password: Yup.string()
          .required('signup.registration.errors.password_required')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
            'common.error.password_error'
          ),
        email: Yup.string()
          .required('signup.registration.errors.email_required')
          .email(('common.error.valid_email')),
        confirm_email: Yup.string()
          .required('signup.registration.errors.confirm_email_required')
          .oneOf(
            [Yup.ref('email'), null],
            'signup.registration.errors.confirm_email_must_match'
          ),
        terms_of_service: Yup.boolean().oneOf(
          [true],
          'common.error.accept_terms_and_conditions'
        ),
      }),
    }),
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: async () => {
      handleFormSubmit({
        email: values.createAccount.email.toLowerCase(),
        password: values.createAccount.password,
      })
    },
  })

  return (
    <Flex alignItems={'center'} flexDirection={'column'} gridGap={2}>
      <Text
        fontSize={24}
        textAlign={'center'}
        fontFamily={fonts.medium}
        color={colors.generalText[colorMode]}
      >
        {t('signup.registration.title')}
      </Text>
      <Text
        fontSize={16}
        paddingTop={10}
        textAlign={'center'}
        color={colors.secondaryText[colorMode]}
      >
        {t('signup.registration.subtitle')}
      </Text>
      <Flex gridGap={7} marginY={5} justifyContent={'center'}>
        {
          organizationConfig?.GOOGLE_LOGIN && (
            <SocialSigninButton
              onClick={() => handleSocialSignUp('google')}
              kind={'google'}
            />
          )
        }
        {
          organizationConfig?.FACEBOOK_LOGIN && (
            <SocialSigninButton
              onClick={() => handleSocialSignUp('facebook')}
              kind={'facebook'}
            />
          )
        }
        {/* <SocialSigninButton
          onClick={() => handleSocialSignUp('twitter')}
          kind={'twitter'}
        ></SocialSigninButton> */}
      </Flex>
      {
        (organizationConfig?.FACEBOOK_LOGIN || organizationConfig?.GOOGLE_LOGIN) && (
          <Text
            fontSize={16}
            marginBottom={3}
            textAlign={'center'}
            color={colors.secondaryText[colorMode]}
          >
            {t('common.or')}
          </Text>
        )
      }
      <>
        {!!error && (
          <AlertComponent
            type={'error'}
            description={error}
            onClose={dispatchError}
          ></AlertComponent>
        )}
      </>
      <Input
        name="createAccount.email"
        value={values.createAccount.email}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.createAccount?.email ? t(errors.createAccount.email) : ''}
        error={!!errors.createAccount?.email && touched.createAccount?.email}
        placeholder={t('signup.label.email')}
      />
      <Input
        name="createAccount.confirm_email"
        value={values.createAccount.confirm_email}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.createAccount?.confirm_email ? t(errors.createAccount?.confirm_email) :  ''}
        error={
          !!errors.createAccount?.confirm_email &&
          touched.createAccount?.confirm_email
        }
        placeholder={t('signup.label.confirm_email')}
      />
      <Input
        name="createAccount.password"
        value={values.createAccount.password}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.createAccount?.password ? t(errors.createAccount?.password) : ''}
        error={
          !!errors.createAccount?.password && touched.createAccount?.password
        }
        type={'password'}
        placeholder={t('signup.label.password')}
      />
      <Container width={1} justifyContent={'left'}>
        <Checkbox
          isChecked={values.createAccount.terms_of_service}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={
            !!errors.createAccount?.terms_of_service &&
            touched.createAccount?.terms_of_service
          }
          name={'createAccount.terms_of_service'}
          paddingTop={2}
          label={renderCheckboxLabel()}
        ></Checkbox>
      </Container>
      <Button
        width={[sizes.loginButtonWidth]}
        marginTop={10}
        isDisabled={!(dirty && isValid)}
        label={t('signup.actions.signup')}
        onClick={() => handleSubmit()}
        isLoading={isLoading}
      ></Button>
    </Flex>
  )
}

export { RegistrationForm }

