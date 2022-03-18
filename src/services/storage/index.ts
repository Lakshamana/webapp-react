import {
  USER_INFO,
  ACCOUNT_INFO,
  ORGANIZATION_INFO,
  CHANNEL_INFO,
  AUTH_TOKEN,
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

export const clearData = () => {
  try {
    localStorage.removeItem(USER_INFO)
    localStorage.removeItem(ACCOUNT_INFO)
    localStorage.removeItem(ORGANIZATION_INFO)
    localStorage.removeItem(CHANNEL_INFO)
    localStorage.removeItem(AUTH_TOKEN)
    localStorage.removeItem(FIREBASE_TOKEN)
  } catch (error) {
    console.error(`ERROR ON CLEAR DATA`, error)
  }
}
