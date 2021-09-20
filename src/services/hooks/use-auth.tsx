import { api } from 'services/api/config'
import { saveData, getData } from 'services/storage'

export const saveLoginData = async ({ user, userData, token }: any) => {
  try {
    // api.defaults.headers.common.Authorization = `bearer ${token}`

    saveData('@FanHero:token', token)
    saveData('@FanHero:user', user)
    saveData('@FanHero:userData', userData)
    saveData('@FanHero:type', user.type)
  } catch (error) {
    return { error }
  }
}

export const getLoginSavedData = async () => {
  try {
    const token = await getData('@FanHero:token')
    const user = await getData('@FanHero:user')
    const userData = await getData('@FanHero:userData')

    // api.defaults.headers.common.Authorization = `bearer ${token}`

    return { token, user, userData }

  } catch (error) {
    return { error }
  }
}
