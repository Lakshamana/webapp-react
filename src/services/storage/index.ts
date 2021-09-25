import { USER_KEY } from 'config/constants'

export const saveData = (key: string, data: any) => {
  try {
    const savedData = localStorage.setItem(key, JSON.stringify(data))
    return savedData
  } catch (error) {
    console.error(`ERROR ON SAVE STORAGE DATA ${key}`, error)
  }
}

export const getData = (key: string) => {
  try {
    const savedData = localStorage.getItem(key)
    if (savedData) {
      return JSON.parse(savedData)
    }
  } catch (error) {
    console.error(`ERROR ON GET STORAGE DATA ${key}`, error)
  }
  return null
}

export const clearData = () => {
  try {
    localStorage.removeItem(USER_KEY)
  } catch (error) {
    console.error(`ERROR ON CLEAR DATA`, error)
  }
}
