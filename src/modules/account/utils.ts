import { ACCOUNT_INFO } from './settings'

export const formatString = (value: string, defaultString = '-') =>
  value || defaultString

export const formatAccountInfo = (values: any, t: any) => {
  const arrayValues = [
    {
      ...ACCOUNT_INFO[0],
      label: t('page.account.name'),
      value: '-',
    },
    {
      ...ACCOUNT_INFO[1],
      label: t('page.account.username'),
      value: '-',
    },
    {
      ...ACCOUNT_INFO[2],
      label: t('page.account.email'),
      value: '-',
    },
    {
      ...ACCOUNT_INFO[3],
      label: t('page.account.password'),
      value: '-',
    },
    {
      ...ACCOUNT_INFO[4],
      label: t('page.account.phone'),
      value: '-',
    },
  ]

  if (values)
    return [
      {
        ...arrayValues[0],
        value: formatString(values?.account?.display_name),
      },
      {
        ...arrayValues[1],
        value: formatString(values?.account?.username),
      },
      {
        ...arrayValues[2],
        value: formatString(values?.account?.email),
      },
      {
        ...arrayValues[3],
        value: '********',
      },
      {
        ...arrayValues[4],
        value: formatString(values?.profile?.phone),
      },
    ]

  return arrayValues
}
