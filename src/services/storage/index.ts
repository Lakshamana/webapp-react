import {
  ANONYMOUS_AUTH,
  APP_SINGLE_CHANNEL,
  APP_USER,
  AUTH_TOKEN,
  CHANNEL_INFO,
  FIREBASE_TOKEN
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
    localStorage.removeItem(APP_SINGLE_CHANNEL)
    localStorage.removeItem(AUTH_TOKEN)
    localStorage.removeItem(FIREBASE_TOKEN)
    localStorage.removeItem(ANONYMOUS_AUTH)
    localStorage.removeItem(APP_USER)
  } catch (error) {
    console.error(`ERROR ON CLEAR DATA`, error)
  }
}
