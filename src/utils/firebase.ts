import { Timestamp } from '@firebase/firestore'
import { FirebaseQuerySnapshot } from 'types/firebase'

export const timestampFromDate = (date: Date): Timestamp => {
  return Timestamp.fromDate(date)
}

export const timestampfromMillis = (milliseconds: number): Timestamp => {
  return Timestamp.fromMillis(milliseconds)
}

export const timestampNow = (): Timestamp => {
  return Timestamp.now()
}

export const parseResultSnapshot = (snapshot: FirebaseQuerySnapshot) => {
  return snapshot
    .docChanges()
    .filter((row) => row.type === 'added')
    .map((row) => {
      const obj = row.doc.data()
      obj['id'] = row.doc.id
      return obj
    })
}
