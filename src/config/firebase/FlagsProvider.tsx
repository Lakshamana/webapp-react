import React, { useState } from 'react'
import { getValue } from 'firebase/remote-config'
import { fetchAndActivate } from 'firebase/remote-config'
import * as crypto from 'crypto-js'
import { firebaseRemoteConfig } from './index'
import { FlagTypes, defaultProps } from './types'

const FlagsContext = React.createContext({})

export const useFlags = () => {
  const context = React.useContext(FlagsContext)
  return context as FlagTypes
}

const { REACT_APP_REMOTE_CONFIG_SECRET } = process.env
const configSecret = Object.freeze(REACT_APP_REMOTE_CONFIG_SECRET)

const FlagsProvider = ({ children }) => {
  const [flags, setFlags] = useState<FlagTypes>({ ...defaultProps })

  React.useEffect(() => {
    // firebaseRemoteConfig.defaultConfig = defaults
    fetchAndActivate(firebaseRemoteConfig)
      .then(() => {
        return getValue(firebaseRemoteConfig, 'configuration_react').asString()
      })
      .then((remoteFlags) => {
        const decryptedEnv = crypto.AES.decrypt(remoteFlags, configSecret)
        const data = JSON.parse(decryptedEnv.toString(crypto.enc.Utf8))
        const newFlags = {
          ...data,
        }
        setFlags({ ORGANIZATION: newFlags.ORGANIZATION, CHANNELS: newFlags.CHANNELS })
      })
      .catch((error) => console.error(error))
  }, [])

  return <FlagsContext.Provider value={flags}>{children}</FlagsContext.Provider>
}

export default FlagsProvider
