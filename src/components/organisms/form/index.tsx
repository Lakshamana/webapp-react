import { Box, Flex,  Text } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Input } from 'components'
import { Props } from './types'

const Form = ({ handleFormSubmit, fields, button, initialValues }: Props) => {
  const shape = fields.reduce((memo, curr) => {
    if (curr.required) {
      switch (curr.type) {
        case 'number':
          const validation = Yup.number()
          if (curr.min) validation.min(curr.min.value, curr.min.error)

          if (curr.max) validation.max(curr.max.value, curr.max.error)

          memo[curr.name] = validation
          break

        case 'text':
        case 'select':
        case 'checkbox':
        default:
          memo[curr.name] = Yup.string().trim().required('Campo obrigatório')
          break
      }
    }

    return memo
  }, {})

  const formik = useFormik({
    initialValues: { ...(initialValues || {}) },
    validationSchema: Yup.object().shape(shape),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async () => {
      formik.isValid && handleFormSubmit && handleFormSubmit(formik.values)
    },
  })

  return (
    <Flex alignItems={'center'} flexDirection={'column'} gridGap={2} width={'100%'}>
      {fields.map(({ label, required, ...field }, index) => (
        <Box width={'100%'} key={`${index}formFieldWrapper${field.name}`}>
          {label && (
            <Text key={`${index}formFieldLabel${field.name}`}>{label}:</Text>
          )}

          {/* field.type === 'select' */}
          {/* field.type === 'number' */}
          {/* field.type === 'checkbox' */}

          <Input
            {...field}
            placeholder={field.name}
            key={`${index}formFieldInput${field.name}`}
            onChange={formik.handleChange}
            error={!!formik.errors[field.name]}
            errorMessage={formik.errors[field.name]?.toString()}
          />
        </Box>
      ))}

      {!!button && button(formik)}
    </Flex>
  )
}

export { Form }
