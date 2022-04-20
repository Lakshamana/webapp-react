import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { format, parseISO } from 'date-fns'
import { ptBR, enUS } from 'date-fns/locale'

import { Flex, Box } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Avatar, DateInput } from 'components'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'

import { pxToRem } from 'styles/metrics'

import { useThemeStore } from 'services/stores/theme'

import { colors } from 'styles'
import { Label } from '../../styles'

import { UpdateButtons } from '../updateButtons'
import { ProfileData } from './types'
import * as Yup from 'yup'

const ProfileInfo = ({
  updateProfile,
  isLoading,
  user,
  locale,
}: ProfileData) => {
  const [isEditing, setIsEditing] = useState(false)
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const minimumAge = 13

  const dateYearsInThePast = (years: number) => {
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    return new Date( year - years, month, day ).toISOString()
  }

  const { values, errors, touched, handleSubmit, handleChange, setFieldValue, resetForm } =
    useFormik({
      initialValues: {
        address: user.address || '',
        birthday: user.birthday || '',
        phone: user.phone || '',
      },
      validationSchema: Yup.object({
        birthday: Yup.date().max(dateYearsInThePast(minimumAge), t('page.account.minimum_age'))
      }),
      onSubmit: async () => {
        updateProfile({ ...values, locale: locale })
      },
    })

  const validateDate = (value) =>
    Date.parse(value) ? new Date(value) : new Date()

  const formatDate = (value) => 
    Date.parse(value) ? 
    format(parseISO(value), 'P', {
      locale: locale === 'pt-BR' ? ptBR : enUS,
    }) :
    '-'

  const renderLabel = (key: string, value: any) => {
    switch (key) {
      case 'birthday':
        return formatDate(values[key])
      case 'phone':
        return (
          <>
          {
            value ? 
            <PhoneInput
              disableDropdown={true}
              disabled={true}
              enableSearch={true}
              country={'us'}
              value={value}
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
            /> :
            ''
          }
          </>
        )
      default:
        return values[key]
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
          ></DateInput>
        )
      case 'phone':
        return (
          <PhoneInput
            enableSearch={true}
            country={'us'}
            value={value}
            onChange={(phone) => setFieldValue(key, phone)}
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
      <Flex width={'100%'} alignItems="left" direction="column">
        <Flex justifyContent="center" py={5}>
          <Avatar size="xl" src={user?.avatar_url || ''}></Avatar>
        </Flex>
        {Object.keys(values).map((key) => {
          return (
            <Box
              color={colors.secondaryText[colorMode]}
              key={key}
              display="flex"
              py="10px"
              flexDirection={isEditing ? 'column' : 'row'}
            >
              <Label fontSize={pxToRem(16)} fontWeight="500">
                {t(`page.account.${key}`)}:
              </Label>
              { 
                isEditing ? 
                renderInputByType(key, values[key]) :
                renderLabel(key, values[key])
              }
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
  )
}

export { ProfileInfo }