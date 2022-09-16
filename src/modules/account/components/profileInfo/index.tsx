import { format } from 'date-fns'
import { enUS, ptBR } from 'date-fns/locale'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from '@chakra-ui/input'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Avatar, DateInput } from 'components'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'

import { pxToRem } from 'styles/metrics'

import { useThemeStore } from 'services/stores/theme'

import { colors } from 'styles'
import { Label } from '../../styles'

import { useQuery } from '@apollo/client'
import { AvatarBadge, Spinner } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { CustomFieldTypesEnum } from 'generated/graphql'
import { ImageUpload } from 'modules/account/components/imageUpload'
import InputMask from 'react-input-mask'
import { QUERY_CUSTOM_FIELDS } from 'services/graphql'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { get } from 'utils/location'
import * as Yup from 'yup'
import { UpdateButtons } from '../updateButtons'
import { ProfileData } from './types'

const ProfileInfo = ({
  updateProfile,
  updateAvatar,
  useDisclosureProps,
  isLoading,
  user,
  locale,
}: ProfileData) => {
  const [isEditing, setIsEditing] = useState(false)
  const { t, i18n } = useTranslation()
  const { colorMode } = useThemeStore()
  const minimumAge = 13
  const { generateImage } = useThumbor()
  const [loading, setloading] = useState(true)

  const getImageUrl = (imagePath: string) => {
    const image = generateImage(ThumborInstanceTypes.IMAGE, imagePath)
    return image
  }

  const [customFieldsData, setcustomFieldsData] = useState<any>(null)
  const itsNotBrazil = (value) => value.name !== 'rg' && value.name !== 'cpf'
  const getLocation = async (data) => {
    try {
      const {
        country: { iso_code },
      } = await get()
      if (iso_code !== 'BR') {
        const filteredData = data.filter(itsNotBrazil)
        setcustomFieldsData(filteredData)
        return
      }
      setcustomFieldsData(data)
    } catch (e) {
      console.error(e)
    } finally {
      setloading(false)
    }
  }

  const { loading: customFieldsLoading } = useQuery(QUERY_CUSTOM_FIELDS, {
    onCompleted: async (data) => {
      getLocation(data?.customFields[0]?.fields)
    },
  })

  const shape = (customFieldsData || []).reduce((memo, curr) => {
    switch (curr.type) {
      case CustomFieldTypesEnum.Number:
        let validationNumber = Yup.number()
        if (curr.required) {
          validationNumber = validationNumber.required(
            t('common.error.field_required')
          )
        }
        memo[curr.name] = validationNumber
        break

      case CustomFieldTypesEnum.String:
        let validationText = Yup.string()
        if (curr.required) {
          validationText = validationText.required(
            t('common.error.field_required')
          )
        }
        memo[curr.name] = validationText
        break

      default:
        let validation = Yup.string()
        if (curr.required) {
          validation = validation.required(t('common.error.field_required'))
        }
        memo[curr.name] = validation
        break
    }
    return memo
  }, {})

  const dateYearsInThePast = (years: number) => {
    let d = new Date()
    let year = d.getFullYear()
    let month = d.getMonth()
    let day = d.getDate()
    return new Date(year - years, month, day).toISOString()
  }

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      birthday: user.birthday || '',
      custom_fields: user.custom_fields || {},
    },
    validationSchema: Yup.object({
      birthday: Yup.date().max(
        dateYearsInThePast(minimumAge),
        t('page.account.minimum_age')
      ),
      custom_fields: Yup.object().shape(shape),
    }),
    onSubmit: async () => {
      const requestValues = { ...values }

      if (requestValues.birthday === '') {
        requestValues.birthday = validateDate(requestValues.birthday)
        setFieldValue('birthday', requestValues.birthday)
      }

      if (
        !requestValues.custom_fields ||
        Object.keys(requestValues.custom_fields).length === 0
      )
        delete requestValues.custom_fields

      updateProfile({ ...requestValues, locale: locale })
    },
  })

  const validateDate = (value) =>
    Date.parse(value)
      ? new Date(value)
      : new Date(dateYearsInThePast(minimumAge))

  const formatDate = (value) =>
    Date.parse(value)
      ? format(new Date(value), 'P', {
          locale: locale === 'pt-BR' ? ptBR : enUS,
        })
      : '-'

  const renderLabelCustomField = (field) => {
    switch (field.name) {
      case 'phone':
        return (
          <>
            {values.custom_fields[field.name] ? (
              <PhoneInput
                disableDropdown={true}
                disabled={true}
                enableSearch={true}
                country={'us'}
                value={values.custom_fields[field.name]}
                inputStyle={{
                  color: colors.secondaryText[colorMode],
                  background: 'none',
                  border: 'none',
                  borderBottom: 'none',
                  borderRadius: '0px',
                  width: '100%',
                  paddingLeft: '44px',
                  paddingTop: '0px',
                  paddingBottom: '0px',
                }}
              />
            ) : (
              ''
            )}
          </>
        )
      case 'cpf':
        return (
          <InputMask
            mask="999.999.999-99"
            value={values.custom_fields[field.name]}
            name={`custom_fields.${field.name}`}
            disabled
            style={{
              color: colors.secondaryText[colorMode],
              background: 'none',
              border: 'none',
              borderBottom: 'none',
              borderRadius: '0px',
              width: '100%',
              paddingLeft: '0px',
              paddingTop: '0px',
              paddingBottom: '0px',
            }}
          />
        )
      default:
        return values.custom_fields[field.name]
    }
  }

  const renderLabel = (key: string, value: any) => {
    switch (key) {
      case 'birthday':
        return formatDate(values[key])
      case 'custom_fields':
        return (
          <Flex width="100%" alignItems="left" flexDirection="column">
            {!customFieldsLoading &&
              (customFieldsData || []).map(
                ({ label, required, ...field }, index) => (
                  <Box
                    width="100%"
                    key={`${index}formFieldWrapper${field.name}`}
                    color={colors.secondaryText[colorMode]}
                    py="10px"
                    flexDirection="row"
                    display="flex"
                  >
                    <Label fontSize={pxToRem(16)} fontWeight="500">
                      {i18n.exists(`common.custom_field.${field.name}`)
                        ? t(`common.custom_field.${field.name}`)
                        : field.name}
                      :
                    </Label>
                    {renderLabelCustomField(field)}
                  </Box>
                )
              )}
          </Flex>
        )
      default:
        return values[key]
    }
  }

  const renderInputCustomField = (field, index) => {
    switch (field.name) {
      case 'phone':
        return (
          <PhoneInput
            enableSearch={true}
            country={'us'}
            value={values.custom_fields[field.name]}
            onChange={(phone) =>
              setFieldValue(`custom_fields.${field.name}`, phone)
            }
            inputStyle={{
              color: colors.secondaryText[colorMode],
              background: 'none',
              border: 'none',
              borderBottom: '1px solid',
              borderColor: colors.secondaryText[colorMode],
              borderRadius: '0px',
              width: '100%',
              paddingTop: '8px',
              paddingBottom: '7px',
            }}
          />
        )
      case 'cpf':
        return (
          <InputMask
            mask="999.999.999-99"
            value={values.custom_fields[field.name]}
            name={`custom_fields.${field.name}`}
            onChange={handleChange}
          >
            {(inputProps) => (
              <Input
                width="100%"
                variant="flushed"
                placeholder="000.000.000-00"
                {...inputProps}
              />
            )}
          </InputMask>
        )
      default:
        return (
          <Input
            {...field}
            value={values.custom_fields[field.name]}
            name={`custom_fields.${field.name}`}
            placeholder={field.name}
            key={`${index}formFieldInput${field.name}`}
            onChange={handleChange}
            variant="flushed"
          />
        )
    }
  }

  const renderInputByType = (key: string, value: any) => {
    switch (key) {
      case 'birthday':
        return (
          <DateInput
            startValue={validateDate(value)}
            onChange={(date) => {
              setFieldValue(key, date)
            }}
            isInvalid={errors[key] && touched[key]}
            errorMessage={errors[key]}
            maxDate={dateYearsInThePast(minimumAge)}
          />
        )
      case 'custom_fields':
        return (
          <Flex width="100%" alignItems="left" flexDirection="column">
            {!customFieldsLoading &&
              (customFieldsData || []).map(
                ({ label, required, ...field }, index) => (
                  <Box
                    width={'100%'}
                    key={`${index}formFieldWrapper${field.name}`}
                    color={colors.secondaryText[colorMode]}
                    py="10px"
                    flexDirection={isEditing ? 'column' : 'row'}
                  >
                    {label && (
                      <Text key={`${index}formFieldLabel${field.name}`}>
                        {label}:
                      </Text>
                    )}
                    <Label fontSize={pxToRem(16)} fontWeight="500">
                      {i18n.exists(`common.custom_field.${field.name}`)
                        ? t(`common.custom_field.${field.name}`)
                        : field.name}
                      :
                    </Label>
                    {renderInputCustomField(field, index)}
                    {errors.custom_fields?.[field.name] &&
                      touched.custom_fields?.[field.name] && (
                        <Text fontSize="0.8em" color="#ff0000" mt="5px">
                          {errors.custom_fields[field.name]}
                        </Text>
                      )}
                  </Box>
                )
              )}
          </Flex>
        )
      default:
        return (
          <Input
            onChange={handleChange}
            width="100%"
            variant="flushed"
            name={key}
            value={value}
          />
        )
    }
  }

  useEffect(() => {
    setIsEditing(false)
  }, [user])

  return (
    <>
      {loading && (
        <Flex h='150px' justifyContent='center' alignItems='center'>
          <Spinner
            thickness="4px"
            width="48px"
            height="48px"
            color={colors.brand.primary[colorMode]}
          />
        </Flex>
      )}
      {!loading && (
        <>
          <Flex width={'100%'} alignItems="left" direction="column">
            <Flex justifyContent="center" py={5}>
              <Avatar size="xl" src={getImageUrl(user?.avatar?.imgPath || '')}>
                <AvatarBadge
                  boxSize="44px"
                  bg={colors.brand.primary[colorMode]}
                  border="4px solid"
                >
                  <Icon icon="eva:edit-outline" />
                  <ImageUpload
                    image={getImageUrl(user?.avatar?.imgPath || '') || ''}
                    uploadImage={updateAvatar}
                    useDisclosureProps={useDisclosureProps}
                  />
                </AvatarBadge>
              </Avatar>
            </Flex>
            {!loading &&
              Object.keys(values).map((key) => {
                return (
                  <Box
                    color={colors.secondaryText[colorMode]}
                    key={key}
                    display="flex"
                    py={key === 'custom_fields' ? '0px' : '10px'}
                    flexDirection={isEditing ? 'column' : 'row'}
                  >
                    {key !== 'custom_fields' && (
                      <Label fontSize={pxToRem(16)} fontWeight="500">
                        {t(`page.account.${key}`)}:
                      </Label>
                    )}
                    {isEditing
                      ? renderInputByType(key, values[key])
                      : renderLabel(key, values[key])}
                  </Box>
                )
              })}
          </Flex>
          <UpdateButtons
            editFormActive={isEditing}
            isLoadingAction={isLoading}
            handleIsEditing={(value) => setIsEditing(value)}
            handleSubmit={handleSubmit}
            resetValues={resetForm}
          ></UpdateButtons>
        </>
      )}
    </>
  )
}

export { ProfileInfo }

