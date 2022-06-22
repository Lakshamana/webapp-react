import {
  ACCOUNT_INFO,
  CHANNEL_INFO,
  USER_INFO,
  APP_SINGLE_CHANNEL,
  AUTH_TOKEN,
  FIREBASE_TOKEN,
  ORGANIZATION_INFO,
  APP_ENVS,
} from 'config/constants'

export const saveData = (key: string, data: any) => {
  try {
    const dataToSave = JSON.stringify(data)
    const savedData = localStorage.setItem(key, dataToSave)
    return savedData
  } catch (error) {
    console.error(`ERROR ON SAVE STORAGE DATA ${key}`, error)
  }
}

export const getData = (key: string) => {
  try {
    const savedData = localStorage.getItem(key)
    if (savedData) return JSON.parse(savedData)
  } catch (error) {
    console.error(`ERROR ON GET STORAGE DATA ${key}`, error)
  }
  return null
}
export const removeData = (key: string) => {
  try {
    localStorage.removeItem(CHANNEL_INFO)
  } catch (error) {
    console.error(`ERROR ON REMOVE STORAGE DATA ${key}`, error)
  }
  return null
}

export const clearData = () => {
  try {
    localStorage.removeItem(CHANNEL_INFO)
    localStorage.removeItem(USER_INFO)
    localStorage.removeItem(ACCOUNT_INFO)
    localStorage.removeItem(APP_SINGLE_CHANNEL)
    localStorage.removeItem(AUTH_TOKEN)
    localStorage.removeItem(FIREBASE_TOKEN)
    localStorage.removeItem(ORGANIZATION_INFO)
    localStorage.removeItem(APP_ENVS)
  } catch (error) {
    console.error(`ERROR ON CLEAR DATA`, error)
  }
}
