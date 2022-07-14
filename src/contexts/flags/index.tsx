import React, { useState } from 'react'
import { fetchAndActivate, getValue } from 'firebase/remote-config'
import * as crypto from 'crypto-js'
import { firebaseRemoteConfig } from 'config/firebase'
import { LoadingScreen } from 'components'
import { defaultProps } from './types'
import { FlagTypes } from 'types/flags'
import { APP_LOCALE, APP_THEME } from 'config/constants'
import { getData, saveData } from 'services/storage'
import { useThemeStore } from 'services/stores'
import { configEnvs } from 'config/envs'

const FlagsContext = React.createContext({})

export const useFlags = () => {
  const context = React.useContext(FlagsContext)
  return context as FlagTypes
}

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
        const decryptedEnv = crypto.AES.decrypt(
          remoteFlags,
          configEnvs.remoteConfigSecret
        )
        const data = JSON.parse(decryptedEnv.toString(crypto.enc.Utf8))
        const newFlags = {
          ...data,
        }
        setFlags({
          ORGANIZATION: newFlags.ORGANIZATION,
          CHANNELS: newFlags.CHANNELS,
        })

        saveData(APP_LOCALE, newFlags.ORGANIZATION.LOCALE || 'en-US')

        const storedTheme = getData(APP_THEME)
        setColorMode(
          storedTheme
          || (newFlags?.ORGANIZATION?.THEME && newFlags?.ORGANIZATION?.THEME?.toLowerCase())
          || 'dark'
        )
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <LoadingScreen />

  return <FlagsContext.Provider value={flags}>{children}</FlagsContext.Provider>
}

export default FlagsProvider
