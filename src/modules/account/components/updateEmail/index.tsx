import { useTranslation } from 'react-i18next'
import { FormikHelpers, useFormik } from 'formik'
import { useDisclosure } from '@chakra-ui/hooks'
import { Flex } from '@chakra-ui/layout'
import { useThemeStore } from 'services/stores'
import { SingleConfiguration } from '..'
import { Button, Modal, Input, Text } from 'components'
import { initialValues, validationSchema } from './settings'
import { sizes, colors } from 'styles'
import { Box } from '@chakra-ui/react'
import { useMutation } from '@apollo/client'
import { MUTATION_SIGNIN, MUTATION_UPDATE_ACCOUNT, MUTATION_VERIFY_MAIL } from 'services/graphql'
import { getData, saveData } from 'services/storage'
import { ACCOUNT_INFO, AUTH_TOKEN, FIREBASE_TOKEN } from 'config/constants'
import { FormProps } from './types'
import { useState } from 'react'
import { useAuth } from 'contexts/auth'

export const UpdateEmail = () => {
  const errorMessageLogin = (type: string) => {
    const Error = {
      'exception:PASSWORD_MISMATCH': t('signin.error.wrong_credentials'),
      'exception:ACCOUNT_NOT_FOUND': t('signin.error.wrong_credentials'),
      'exception:TOO_MANY_ATTEMPTS_TRY_LATER': t(
        'signin.error.too_many_attempts'
      ),
      default: t('common.error.generic_api_error'),
    }

    return Error[type] || Error.default
  }
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [loading, setloading] = useState(false)
  const { updateAccount } = useAuth()

  const [verifyMail] = useMutation(MUTATION_VERIFY_MAIL)
  const [testPassword] = useMutation(MUTATION_SIGNIN, {
    onError: (error) => setFieldError('password', errorMessageLogin(error.message)),
  })
  const [updateEmailOnly] = useMutation(MUTATION_UPDATE_ACCOUNT)
  const [signIn] = useMutation(MUTATION_SIGNIN, {
    onCompleted: async (result) => {
      await saveData(AUTH_TOKEN, result.signIn.token.accessToken)
      await saveData(FIREBASE_TOKEN, result.signIn.token.firebaseToken)
      await updateAccount(result.signIn.account)
    }
  })

  const flow = async(values: FormProps, actions: FormikHelpers<FormProps>) => {
    setloading(true)
    const email = getData(ACCOUNT_INFO)?.email
    const { password } = values

    await verifyMail({variables: {payload: { email: values.newEmail }}})
    .then((res)=>{
      actions.setFieldError('newEmail', t('signup.error.email_exists'))
      setloading(false)
    })
    .catch( async (err)=>{
      try {
        await testPassword({variables: {payload: { password, email }}})
        await updateEmailOnly({variables: {payload: { email: values.newEmail }}})
        await signIn({variables: {payload: { password, email: values.newEmail }}})
        setloading(false)
        onClose()
        resetForm()
      } catch(err) {
        setloading(false)
      }
    })

  }

  const {
    values,
    handleSubmit,
    handleChange,
    resetForm,
    handleBlur,
    dirty,
    isValid,
    errors,
    touched,
    setFieldError,
  } = useFormik({
    initialValues: {
      ...initialValues,
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: flow,
  })
  return (
    <>
      <SingleConfiguration
        text={t('page.account.email')}
        children={
          <Button
            size="sm"
            width="auto"
            variant="link"
            onClick={onOpen}
            label={t('page.account.update_email')}
          ></Button>
        }
        {...{ colorMode }}
      />
      <Modal
        size="lg"
        isCentered
        closeButton={false}
        isOpen={isOpen}
        onClose={onClose}
        defaultActions={false}
        actionLabel={t('page.account.update')}
        onConfirm={handleSubmit}
      >
        <Flex flexDirection="column" gridGap={2} alignItems={'center'}>
          <Text
            mb={3}
            fontSize={'1.5rem'}
            color={colors.generalText[colorMode]}
          >
            {t('page.account.update_email')}
          </Text>
          <Input
            type="text"
            name="newEmail"
            value={values.newEmail}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.newEmail}
            error={!!errors.newEmail && touched.newEmail}
            placeholder={t('page.account.new_email')}
          />
          <Input
            type="text"
            name="newEmailConfirmation"
            value={values.newEmailConfirmation}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.newEmailConfirmation}
            error={
              !!errors.newEmailConfirmation &&
              touched.newEmailConfirmation
            }
            placeholder={t('page.account.confirm_new_email')}
          />
          <Input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            errorMessage={errors.password}
            error={!!errors.password && touched.password}
            placeholder={t('page.account.password')}
          />
          <Box mt={4} display="flex" flexDirection="column" alignItems="center">
            <Button
              width={sizes.loginButtonWidth}
              label={t('page.account.update')}
              onClick={() => handleSubmit()}
              isDisabled={!(dirty && isValid)}
              isLoading={loading}
            />
            <Button
              width={sizes.loginButtonWidth}
              marginTop={2}
              variant={'ghost'}
              label={t('common.cancel')}
              onClick={() => {
                resetForm()
                onClose()
              }}
            />
          </Box>
        </Flex>
      </Modal>
    </>
  )
}
