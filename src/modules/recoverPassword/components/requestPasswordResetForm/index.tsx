import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Flex } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { Text, Card, Input, Button, AlertComponent } from 'components'
import { sizes, colors } from 'styles'
import { useThemeStore } from 'services/stores/theme'
import { Props } from './types'
import { validationSchema, initialValues } from './settings'

const RequestPasswordResetForm = ({
  handleFormSubmit,
  dispatchError,
  error,
  isLoading
}: Props) => {
  const { t } = useTranslation()
  const history = useHistory()

  const { colorMode } = useThemeStore()

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    dirty,
    isValid,
  } = useFormik({
    initialValues: {
      ...initialValues,
    },
    validationSchema,
    validateOnChange: true,
    onSubmit: async () => {
      handleFormSubmit({ payload: { ...values } })
    },
  })

  return (
    <Card
      paddingX={[30, 60]}
      paddingY={[40, 40]}
      width={[1, sizes.loginCardWidth]}
    >
      <Text
        fontSize={24}
        textAlign={'center'}
        fontWeight={'bolder'}
        color={colors.generalText[colorMode]}
      >
        {t('recoverPassword.title')}
      </Text>
      <Text
        fontSize={16}
        paddingTop={10}
        textAlign={'center'}
        color={colors.secondaryText[colorMode]}
      >
        {t('recoverPassword.subtitle')}
      </Text>
      <Flex
        alignItems={'center'}
        marginTop={6}
        flexDirection={'column'}
        gridGap={3}
      >
        {!!error && (
          <AlertComponent
            paddingTop={20}
            type={'error'}
            description={error}
            onClose={dispatchError}
          ></AlertComponent>
        )}
        <Input
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          value={values.email}
          placeholder={t('signin.label.email')}
          errorMessage={errors.email}
          error={!!errors.email && touched.email}
        />
        <Button
          width={[sizes.loginButtonWidth]}
          marginTop={2}
          isDisabled={!(dirty && isValid)}
          label={t('recoverPassword.sendCode')}
          isLoading={isLoading}
          onClick={() => handleSubmit()}
        ></Button>
        <Button
          width={[sizes.loginButtonWidth]}
          variant='ghost'
          label={t('common.cancel')}
          onClick={() => history.push('/login')}
        ></Button>
      </Flex>
    </Card>
  )
}

export { RequestPasswordResetForm }
