// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { Flex, Spinner} from '@chakra-ui/react'
import { getLoginSavedData  } from 'services/hooks'
import { useFanHeroStore } from 'services/stores'

export const AuthProvider = ({ children }: any ) => {
  const [loading, setLoading] = useState(true)
  const { setUserData } = useFanHeroStore()

  const getUserData = async () => {
    const { error, user, userData } = await getLoginSavedData()

    if(!error && user) {
      setUserData(userData)
    }

    setLoading(false)
    
  }

  useEffect(() => {
    getUserData()
  }, [])


  return (
    <Flex background="backgroundLayout">
      {
        loading ? <Spinner color="textLight"/> : children
      }
    </Flex>
  )
}
