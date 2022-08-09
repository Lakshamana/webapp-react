import axios from 'axios'
import { LocationMaxmindResponse } from 'types/location.d'

const { REACT_APP_API_ENDPOINT } = process.env

export const get = async (): Promise<LocationMaxmindResponse> => {
  const ip = await axios.get('https://api.ipify.org/?format=json')
  const city = await axios.post(`https://${REACT_APP_API_ENDPOINT}/maxmind/lookup`, { ip: ip.data.ip })
  return city.data.body.data
}