import DatePicker, { registerLocale } from 'react-datepicker'
import { Input } from '@chakra-ui/react'
import ptBR from 'date-fns/locale/pt-BR'
import enUS from 'date-fns/locale/en-US'
import { InputProps } from './types'

import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import i18n from 'config/i18n'

registerLocale('pt-BR', ptBR)
registerLocale('en-US', enUS)

const DateInput = ({ startValue, onChange }: InputProps) => {
  const [date, setDate] = useState(startValue)

  const onChangeDate = (date: string) => {
    let dt = new Date(date)
    onChange(dt.toISOString())
  }
  return (
    <DatePicker
      selected={date}
      dateFormat={i18n.language === 'pt-BR' ? 'dd/MM/yyyy' : 'MM/dd/yyyy'}
      onChange={(date) => {
        onChangeDate(date)
        setDate(date)
      }}
      locale={i18n.language}
      customInput={<Input width={'100%'} variant="flushed" />}
    />
  )
}

export { DateInput }
