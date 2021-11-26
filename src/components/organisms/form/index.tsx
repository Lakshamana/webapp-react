import { Box, Text } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Input } from 'components'
import { Props } from './types'

const Form = ({ handleFormSubmit, fields, button, initialValues } : Props) => {
  const shape = fields.reduce((memo, curr) => {
    if (curr.required) {
      switch (curr.type) {
        case 'number':
          const validation = Yup.number()
          if (curr.min)
            validation.min(curr.min.value, curr.min.error)

          if (curr.max)
            validation.max(curr.max.value, curr.max.error)

          memo[curr.name] = validation
          break

        case 'text':
        case 'select':
        case 'checkbox':
        default:
          memo[curr.name] = Yup.string().trim().required(curr.required)
          break
      }
    }

    return memo
  }, {})

  const { values, handleChange, handleSubmit, errors, isValid } = useFormik({
		initialValues: { ...(initialValues || {}) },
		validationSchema: Yup.object().shape(shape),
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: async () => {
      console.log('values', values)
		  isValid && handleFormSubmit && handleFormSubmit(values)
		}
  })

  console.log('errors', errors)
  return (
    <Box>
      <form>
        { fields.map(({ label, required, ...field }, index) => (
          <Box key={`${index}formFieldWrapper${field.name}`}>
            {label && (
              <Text key={`${index}formFieldLabel${field.name}`}>
                {label}:
              </Text>
            )}

            {/* field.type === 'select' */}
            {/* field.type === 'number' */}
            {/* field.type === 'checkbox' */}

            <Input
              {...field}
              key={`${index}formFieldInput${field.name}`}
              onChange={handleChange}
              error={!!errors[field.name]}
              errorMessage={errors[field.name]?.toString()}
            />
          </Box>
        ))}

        {!!button && button(handleSubmit)}
      </form>
    </Box>
  )
}

export { Form }
