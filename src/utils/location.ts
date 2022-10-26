import axios from 'axios'
import { GET_IP_API } from 'config/constants'
import { LocationMaxmindResponse } from 'types/location.d'

const { REACT_APP_API_ENDPOINT } = process.env

export const getMaxmindLocation =
  async (): Promise<LocationMaxmindResponse> => {
    try {
      const ip = await axios.get(GET_IP_API)
      const city = await axios.post(
        `https://${REACT_APP_API_ENDPOINT}/maxmind/lookup`,
        { ip: ip.data.ip }
      )
      return city.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error
      } else {
        throw new Error()
      }
    }
  }
