import { Box, Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Button, Input, Checkbox } from 'components'
import { Props } from './types'
import { validationSchema } from './settings'
import { useFormik } from 'formik'
import { initialValues } from './settings'
import { sizes } from 'styles'

const SigninForm = ({ handleFormSubmit, isLoading }: Props) => {
  const { t } = useTranslation()

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
    <Flex
      alignItems={'center'}
      marginY={30}
      flexDirection={'column'}
      gridGap={3}
    >
      <Input
        name="signIn.email"
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        value={values.signIn.email}
        placeholder={t('signin.label.email')}
        errorMessage={errors.signIn?.email}
        error={!!errors.signIn?.email && touched.signIn?.email}
      />
      <Input
        name="signIn.password"
        type={'password'}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.signIn.password}
        placeholder={t('signin.label.password')}
        errorMessage={errors.signIn?.password}
        error={!!errors.signIn?.password && touched.signIn?.password}
      />
      <Box w="100%" py={2}>
        <Checkbox label={t('signin.label.save_as_default')}></Checkbox>
      </Box>
      <Button
        width={[sizes.loginButtonWidth]}
        mt={3}
        isDisabled={!(dirty && isValid)}
        label={t('signin.actions.login')}
        onClick={() => handleSubmit()}
        isLoading={isLoading}
      ></Button>
    </Flex>
  )
}

export { SigninForm }
