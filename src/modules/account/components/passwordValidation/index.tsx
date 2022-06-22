import { Box, Flex } from '@chakra-ui/react'
import { Button, Input, Modal, Text } from 'components'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './settings'
import { useTranslation } from 'react-i18next'
import { useAuthStore, useThemeStore } from 'services/stores'
import { colors, sizes } from 'styles'
import { MUTATION_SIGNIN, MUTATION_UPDATE_ACCOUNT } from 'services/graphql'
import { useMutation } from '@apollo/client'
import { saveData } from 'services/storage'
import { AUTH_TOKEN, FIREBASE_TOKEN } from 'config/constants'
import { useState } from 'react'
import { useAuth } from 'contexts/auth'

export const PasswordConfirmation = ({ isOpen, onClose, updatedValues }) => {
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
  const [loading, setloading] = useState(false)

  const [verifyPassword] = useMutation(MUTATION_SIGNIN, {
    onError: (error) =>
      setFieldError('password', errorMessageLogin(error.message)),
  })
  const [signin] = useMutation(MUTATION_SIGNIN, {
    onCompleted: async (result) => {
      await saveData(AUTH_TOKEN, result.signIn.token.accessToken)
      await saveData(FIREBASE_TOKEN, result.signIn.token.firebaseToken)
    },
  })
  const [updateAccount] = useMutation(MUTATION_UPDATE_ACCOUNT)
  const { updateAccount: updateAccountHook } = useAuth()
  const { account: accountStore } = useAuthStore()

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
    onSubmit: async (values) => {
      setloading(true)
      const email = accountStore?.email
      const isPasswordValid = await verifyPassword({
        variables: { payload: { password: values.password, email } },
      })
      if (isPasswordValid.errors) {
        setloading(false)
        return null
      }
      const account = await updateAccount({
        variables: { payload: { ...updatedValues } },
      })
      await signin({
        variables: {
          payload: { password: values.password, email: updatedValues.email },
        },
      })
      await updateAccountHook(account.data.updateMyAccount)
      setloading(false)
      onClose()
      resetForm()
    },
  })

  return (
    <Modal
      size="lg"
      isCentered
      closeButton={false}
      isOpen={isOpen}
      onClose={onClose}
      defaultActions={false}
      actionLabel={t('signin.label.password')}
    >
      <Flex flexDirection="column" gridGap={2} alignItems="center">
        <Text mb={1} fontSize="1.5rem" color={colors.generalText[colorMode]}>
          {t('page.account.password')}
        </Text>
        <Text mb={3} fontSize="1rem" color={colors.secondaryText[colorMode]} textAlign="center">
          {t('page.account.verify_password')}
        </Text>
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
  )
}
