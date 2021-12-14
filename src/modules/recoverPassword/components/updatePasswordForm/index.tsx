import { useTranslation } from 'react-i18next'
import { Flex } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { Text, Card, Input, Button, AlertComponent } from 'components'
import { sizes, colors } from 'styles'
import { useThemeStore } from 'services/stores/theme'
import { Props } from './types'
import { validationSchema, initialValues } from './settings'

const UpdatePasswordForm = ({
  handleFormSubmit,
  dispatchError,
  error,
}: Props) => {
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
      handleFormSubmit({ updatePassword: { ...values } })
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
        {t('updatePassword.title')}
      </Text>
      <Text
        fontSize={16}
        paddingTop={10}
        textAlign={'center'}
        color={colors.secondaryText[colorMode]}
      >
        {t('updatePassword.subtitle')}
      </Text>
      <>
        {!!error && (
          <AlertComponent
            paddingTop={20}
            type={'error'}
            description={error}
            onClose={dispatchError}
          ></AlertComponent>
        )}
      </>
      <Flex
        alignItems={'center'}
        marginTop={30}
        flexDirection={'column'}
        gridGap={3}
      >
        <Input
          name="oobCode"
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          value={values.oobCode}
          placeholder={t('recoverPassword.label.code')}
          errorMessage={errors.oobCode}
          error={!!errors.oobCode && touched.oobCode}
        />
        <Input
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          value={values.password}
          placeholder={t('signin.label.password')}
          errorMessage={errors.password}
          error={!!errors.password && touched.password}
        />
        {/* TO-DO LOADING (LOAD IS NOT DEFINED ON FIGMA) */}
        <Button
          width={[1, sizes.loginButtonWidth]}
          mt={3}
          type={dirty && isValid ? 'submit' : 'disabled'}
          label={t('common.send')}
          onClick={handleSubmit}
        ></Button>
      </Flex>
    </Card>
  )
}

export { UpdatePasswordForm }
