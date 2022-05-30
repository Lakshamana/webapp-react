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

export const FirebaseSession = ( { children, idLivestream }) => {
  const { account } = useAuthStore()
  const db = getDatabase(firebaseApp)
  const dbRef = ref(db, 'livestream/presence')
  useEffect(() => {
    if(idLivestream && account?.id) {
      set(child(dbRef, `${idLivestream}/${account?.id}/sessions/${account?.id}`), account)
    }
    return () => {
      remove(child(dbRef, `${idLivestream}/${account?.id}/sessions/${account?.id}`))
    }
  }, [idLivestream])

  return (
    <>{children}</>
  )
}