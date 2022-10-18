import axios from 'axios'

const INSPIRE_PAYMENT_API = 'https://api-payment-staging.inspireplatform.io'
const HEADERS = { headers: { tenant: 'Marvel-wu61z' } }

export const MONTHS = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
]

export const formatMonth = (month: number) => (month < 10 ? `0${month}` : `${month}`)

export const years = [...new Array(100)].map(
  (_, index) => new Date().getFullYear() + index
)

export const getCountries = async () => {
  const result = await axios.get(`${INSPIRE_PAYMENT_API}/countries`, HEADERS)
  const options = result.data.body.data.map(({ id, name }) => ({
    value: id,
    label: name,
  }))
  return options
}

export const getStatesById = async (id: string) => {
  const result = await axios.get(
    `${INSPIRE_PAYMENT_API}/states?countryId=${id}`,
    HEADERS
  )
  const options = result.data.body.data.map(({ id, name }) => ({
    value: id,
    label: name,
  }))

  return options
}
