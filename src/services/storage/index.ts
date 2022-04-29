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
    localStorage.clear()
  } catch (error) {
    console.error(`ERROR ON CLEAR DATA`, error)
  }
}
