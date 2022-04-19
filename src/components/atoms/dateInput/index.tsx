import DatePicker, { registerLocale } from 'react-datepicker'
import { Button, Flex, Input, Select, Text } from '@chakra-ui/react'
import ptBR from 'date-fns/locale/pt-BR'
import enUS from 'date-fns/locale/en-US'
import { InputProps } from './types'

import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import i18n from 'config/i18n'
import { getMonth, getYear } from 'date-fns'
import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'

registerLocale('pt-BR', ptBR)
registerLocale('en-US', enUS)

const DateInput = ({ startValue, onChange, isInvalid = false, errorMessage }: InputProps) => {
  const [date, setDate] = useState(startValue)
  const { t } = useTranslation()
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    )
  const onChangeDate = (date: string) => {
    let dt = new Date(date)
    onChange(dt.toISOString())
  }
  const years = range(1900, getYear(new Date()), 1)
  const months = [
    t('common.months.january'),
    t('common.months.february'),
    t('common.months.march'),
    t('common.months.april'),
    t('common.months.may'),
    t('common.months.june'),
    t('common.months.july'),
    t('common.months.august'),
    t('common.months.september'),
    t('common.months.october'),
    t('common.months.november'),
    t('common.months.december'),
  ]

  return (
    <>
      <DatePicker
        selected={date}
        dateFormat={i18n.language === 'pt-BR' ? 'dd/MM/yyyy' : 'MM/dd/yyyy'}
        onChange={(date) => {
          onChangeDate(date)
          setDate(date)
        }}
        locale={i18n.language}
        customInput={
          <Input width={'100%'} variant="flushed" isInvalid={isInvalid}/>
        }
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <Flex alignItems="center" px="8px">
            <Button
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              leftIcon={<Icon icon="ant-design:caret-left-outlined" />}
            />

            <Select
              variant="filled"
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>

            <Select
              variant="filled"
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>

            <Button
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              leftIcon={<Icon icon="ant-design:caret-right-outlined" />}
            />
          </Flex>
        )}
      />
      {isInvalid && <Text fontSize="0.8em" color="red" mt="5px">{errorMessage}</Text>}
    </>
  )
}

export { DateInput }
