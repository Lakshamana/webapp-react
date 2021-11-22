import { ACCOUNT_INFO } from './settings'

export const formatString = (value: string, defaultString = '-') =>
  value || defaultString

export const formatPhone = (phone: string) => phone

export const formatAccountInfo = (values: any, t: any) => {
  if (!values)
    return [
      {
        ...ACCOUNT_INFO[0],
        label: t('page.account.name'),
        value: formatString(values?.email),
      },
      {
        ...ACCOUNT_INFO[1],
        label: t('page.account.username'),
        value: formatString(values?.username),
      },
      {
        ...ACCOUNT_INFO[2],
        label: t('page.account.email'),
        value: formatString(values?.email),
      },
      {
        ...ACCOUNT_INFO[3],
        label: t('page.account.password'),
        value: '********',
      },
      {
        ...ACCOUNT_INFO[4],
        label: t('page.account.phone'),
        value: formatPhone(formatString(values?.phone)),
      },
    ]

  return values.data
}
