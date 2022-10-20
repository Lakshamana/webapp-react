import { Box, Flex } from '@chakra-ui/react'
import {
  AlertComponent, Button,
  Input,
  Link, SocialSigninButton, Text
} from 'components'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import {
  useCustomizationStore,
  useOrganizationStore, useThemeStore
} from 'services/stores'
import { colors, sizes } from 'styles'
import { initialValues, validationSchema } from './settings'
import { Props } from './types'

const SigninForm = ({
  handleFormSubmit,
  handleSocialSubmit,
  dispatchError,
  isLoading,
  error,
}: Props) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { organization } = useOrganizationStore()
  const { organizationConfig } = useCustomizationStore()

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
    onSubmit: async () => {
      handleFormSubmit({ ...values })
    },
  })

  return (
    <>
      <Text
        fontSize={24}
        textAlign={'center'}
        fontWeight={'bolder'}
        color={colors.generalText[colorMode]}
      >
        {t('signin.title', { org: organization?.name })}
      </Text>
      <Text
        fontSize={16}
        paddingTop={10}
        textAlign={'center'}
        color={colors.secondaryText[colorMode]}
      >
        {t('signin.subtitle')}
      </Text>
      <Flex gridGap={7} marginY={30} justifyContent={'center'}>
        {
          organizationConfig?.GOOGLE_LOGIN && (
            <SocialSigninButton
              onClick={() => handleSocialSubmit('google')}
              kind={'google'}
            />
          )
        }
        {
          organizationConfig?.FACEBOOK_LOGIN && (
            <SocialSigninButton
              onClick={() => handleSocialSubmit('facebook')}
              kind={'facebook'}
            />
          )
        }
        {/* <SocialSigninButton
          onClick={() => handleSocialSubmit('twitter')}
          kind={'twitter'}
        /> */}
      </Flex>

      {
        (organizationConfig?.FACEBOOK_LOGIN || organizationConfig?.GOOGLE_LOGIN) && (
          <Text
            fontSize={16}
            textAlign={'center'}
            marginBottom={error ? 15 : 0}
            color={colors.secondaryText[colorMode]}
          >
            {t('common.or')}
          </Text>
        )
      }

      <Flex
        alignItems={'center'}
        marginTop={30}
        flexDirection={'column'}
        gridGap={3}
      >
        {!!error && (
          <AlertComponent
            type={'error'}
            description={error}
            onClose={dispatchError}
          />
        )}
        <Input
          name="payload.email"
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          value={values.payload.email}
          onEnterPress={handleSubmit}
          placeholder={t('signin.label.email')}
          errorMessage={errors.payload?.email}
          error={!!errors.payload?.email && touched.payload?.email}
        />
        <Input
          name="payload.password"
          type={'password'}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.payload.password}
          placeholder={t('signin.label.password')}
          onEnterPress={handleSubmit}
          errorMessage={errors.payload?.password}
          error={!!errors.payload?.password && touched.payload?.password}
        />
        <Button
          width={[sizes.loginButtonWidth]}
          mt={3}
          isDisabled={!(dirty && isValid)}
          label={t('signin.actions.login')}
          onClick={() => handleSubmit()}
          isLoading={isLoading}
        />
        <Box textAlign={'center'} marginTop={5}>
          <Link
            to={'/recoverPassword'}
            defaultColor
            label={t('signin.actions.forgot_password')}
            textTransform={'uppercase'}
            fontWeight={'bolder'}
          />
        </Box>
        <Flex justifyContent={'center'} flexWrap={'wrap'} mt={5}>
          <Text color={colors.generalText[colorMode]} paddingRight={1}>
            {t('signin.label.dont_have_account')}
          </Text>
          <Link
            to={'/signup'}
            fontWeight={'bolder'}
            textTransform={'uppercase'}
            label={t('signin.actions.signup_here')}
          />
        </Flex>
      </Flex>
    </>
  )
}

export { SigninForm }

