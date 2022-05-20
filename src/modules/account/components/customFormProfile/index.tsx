import { Box, Flex,  Text } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Input } from '@chakra-ui/input'
import { Props } from './types'
import { colors } from 'styles'
import { useThemeStore } from 'services/stores'
import { Label } from '../../styles'
import { pxToRem } from 'styles/metrics'
import { UpdateButtons } from '../updateButtons'
import { useState } from 'react'

const CustomFormProfile = ({
  handleFormSubmit,
  fields,
  isLoading,
  user,
}: Props) => {
  const { custom_fields } = user
  const { colorMode } = useThemeStore()
  const [isEditing, setIsEditing] = useState(false)
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

  const {
    values,
    handleSubmit,
    handleChange,
    resetForm,
  } = useFormik({
    initialValues: { ...(custom_fields || {}) },
    validationSchema: Yup.object().shape(shape),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async () => {
      handleFormSubmit({ custom_fields: values })
    },
  })

  return (
    <Flex width="100%" alignItems="left" flexDirection="column">
      {fields.map(({ label, required, ...field }, index) => (
        <Box
          width={'100%'}
          key={`${index}formFieldWrapper${field.name}`}
          color={colors.secondaryText[colorMode]}
          py="10px"
          flexDirection={isEditing ? 'column' : 'row'}
          >
          {label && (
            <Text key={`${index}formFieldLabel${field.name}`}>{label}:</Text>
          )}

          <Label fontSize={pxToRem(16)} fontWeight="500">
            {field.name}:
          </Label>
          {
            isEditing ? 
            (
              <Input
                {...field}
                value={values[field.name]}
                placeholder={field.name}
                key={`${index}formFieldInput${field.name}`}
                onChange={handleChange}
                variant="flushed"
              />
            ) : values[field.name]
          }
        </Box>
      ))}
      <UpdateButtons
        editFormActive={isEditing}
        isLoadingAction={isLoading}
        handleIsEditing={(value) => setIsEditing(value)}
        handleSubmit={handleSubmit}
        resetValues={resetForm}
      />
    </Flex>
  )
}

export { CustomFormProfile }
