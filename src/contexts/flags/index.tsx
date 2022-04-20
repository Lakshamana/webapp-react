import React, { useState } from 'react'
import { getValue } from 'firebase/remote-config'
import { fetchAndActivate } from 'firebase/remote-config'
import * as crypto from 'crypto-js'
import { firebaseRemoteConfig } from 'config/firebase'
import { LoadingScreen } from 'components'
import { defaultProps } from './types'
import { FlagTypes } from 'types/flags'
import { APP_LOCALE, APP_THEME } from 'config/constants'
import { getData, saveData } from 'services/storage'
import { useThemeStore } from 'services/stores'

const FlagsContext = React.createContext({})

export const useFlags = () => {
  const context = React.useContext(FlagsContext)
  return context as FlagTypes
}

const { REACT_APP_REMOTE_CONFIG_SECRET } = process.env
const configSecret = Object.freeze(REACT_APP_REMOTE_CONFIG_SECRET)

export const FlagsProvider = ({ children }) => {
  const [flags, setFlags] = useState<FlagTypes>({ ...defaultProps })
  const [loading, setLoading] = useState(true)
  const { setColorMode } = useThemeStore()

  React.useEffect(() => {
    fetchAndActivate(firebaseRemoteConfig)
      .then(() => {
        return getValue(firebaseRemoteConfig, 'configuration').asString()
      })
      .then((remoteFlags: string) => {
        const decryptedEnv = crypto.AES.decrypt(remoteFlags, configSecret)
        const data = JSON.parse(decryptedEnv.toString(crypto.enc.Utf8))
        const newFlags = {
          ...data,
        }
        setFlags({
          ORGANIZATION: newFlags.ORGANIZATION,
          CHANNELS: newFlags.CHANNELS,
        })

        if (!getData(APP_LOCALE))
          saveData(APP_LOCALE, newFlags.ORGANIZATION.LOCALE)
        
        const storedTheme = getData(APP_THEME)
        setColorMode(storedTheme || newFlags?.ORGANIZATION?.THEME?.toLowerCase())
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <LoadingScreen />

  return <FlagsContext.Provider value={flags}>{children}</FlagsContext.Provider>
}

export default FlagsProvider
