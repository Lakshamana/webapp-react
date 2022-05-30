import { useEffect } from "react"
import { firebaseApp } from 'config/firebase'
import {
  child,
  getDatabase,
  ref,
  remove,
  set
} from "firebase/database"
import { useAuthStore } from "services/stores"
import { isMobile } from "utils/browser"

export const FirebaseSession = ( { children, idLivestream }) => {
  const { account } = useAuthStore()
  const db = getDatabase(firebaseApp)
  const dbRef = ref(db, 'livestream/presence')

  const goOnline = () => {
    set(child(dbRef, `${idLivestream}/${account?.id}/sessions/${account?.id}`), account)
  }

  const goOffline = () => {
    remove(child(dbRef, `${idLivestream}/${account?.id}/sessions/${account?.id}`))
  }

  const mobileDeviceBehavior = () => {
    document.addEventListener('visibilitychange', () => {
      console.log('visible: ',document.visibilityState)
      if (document.visibilityState !== 'visible') {
        goOffline()
      } else {
        goOnline()
      }
    })
  }

  useEffect(() => {
    if(idLivestream) {
      goOnline()
    }

    if(isMobile()) {
      mobileDeviceBehavior()
    }

    return () => {
      goOffline()
    }
  }, [idLivestream])

  return (
    <>{children}</>
  )
}