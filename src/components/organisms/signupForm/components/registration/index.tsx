import { Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import {
  Input,
  Checkbox,
  Button,
  Container,
  Text,
  SocialSigninButton,
  AlertComponent
} from 'components'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './settings'
import { RegistrationProps } from './types'
import { colors, fonts, sizes } from 'styles'
import { useThemeStore } from 'services/stores/theme'

const RegistrationForm = ({
  handleFormSubmit,
  dispatchError,
  error,
}: RegistrationProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()

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
    validationSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: async () => {
      handleFormSubmit({
        createAccount: {
          email: values.createAccount.email,
          password: values.createAccount.password,
        },
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
        <SocialSigninButton type={'facebook'}></SocialSigninButton>
        <SocialSigninButton type={'google'}></SocialSigninButton>
      </Flex>
      <Text
        fontSize={16}
        marginBottom={3}
        textAlign={'center'}
        color={colors.secondaryText[colorMode]}
      >
        {t('common.or')}
      </Text>
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
        errorMessage={errors.createAccount?.email}
        error={!!errors.createAccount?.email && touched.createAccount?.email}
        placeholder={t('signup.label.email')}
      />
      <Input
        name="createAccount.confirm_email"
        value={values.createAccount.confirm_email}
        onChange={handleChange}
        onBlur={handleBlur}
        errorMessage={errors.createAccount?.confirm_email}
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
        errorMessage={errors.createAccount?.password}
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
          label={t('signup.actions.accept_terms')}
        ></Checkbox>
      </Container>
      <Button
        width={[1, sizes.loginButtonWidth]}
        marginTop={20}
        type={dirty && isValid ? 'submit' : 'disabled'}
        label={'Sign Up'}
        onClick={handleSubmit}
      ></Button>
    </Flex>
  )
}

export { RegistrationForm }
