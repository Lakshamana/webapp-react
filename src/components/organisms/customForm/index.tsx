import { Input as InputChakra } from '@chakra-ui/input'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Input } from 'components'
import { useFormik } from 'formik'
import PhoneInput from 'react-phone-input-2'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import * as Yup from 'yup'
import { InputMaskStyled } from './style'
import { Props } from './types'

const CustomForm = ({ handleFormSubmit, fields, button, initialValues }: Props) => {
  const { colorMode } = useThemeStore()
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

  const renderInputCustomField = (field, index) => {
    switch (field.name) {
      case 'phone':
        return (
          <PhoneInput
            enableSearch={true}
            country={'us'}
            onChange={(phone) =>
              formik.setFieldValue(field.name, phone)
            }
            inputStyle={{
              color: colors.inputText[colorMode],
              background: colors.inputBg[colorMode],
              border: 'none',
              borderColor: colors.secondaryText[colorMode],
              borderRadius: '4px',
              width: '100%',
              paddingTop: '8px',
              paddingBottom: '8px',
              height: '56px',
              boxShadow: "none",
            }}
          />
        )
      case 'cpf':
        return (
          <InputMaskStyled
            name={field.name}
            mask="999.999.999-99"
            value={formik.values[field.name]}
            onChange={formik.handleChange}
          >
            {(inputProps) => (
              <InputChakra
                width="100%"
                placeholder="000.000.000-00"
                {...inputProps}
              />
            )}
          </InputMaskStyled>
        )
      default:
        return (
          <Input
            {...field}
            placeholder={field.name}
            key={`${index}formFieldInput${field.name}`}
            onChange={formik.handleChange}
            error={!!formik.errors[field.name]}
            errorMessage={formik.errors[field.name]?.toString()}
          />
        )
    }
  }

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

          {renderInputCustomField(field, index)}
        </Box>
      ))}

      {!!button && button(formik)}
    </Flex>
  )
}

export { CustomForm }

