import {
  Timestamp,
  FieldValue,
  QuerySnapshot,
  DocumentData,
  QueryDocumentSnapshot,
  CollectionReference,
} from '@firebase/firestore'

export type FirebaseQuerySnapshot = QuerySnapshot<DocumentData>

export type FirebaseQuerySnapshotData = QueryDocumentSnapshot<DocumentData>

export type FirebaseTimestamp = Timestamp | FieldValue

export interface MessageDocumentData {
  userId: string
  username: string
  avatarPath?: string
  updatedAt: FirebaseTimestamp
  text: string
  dateAdded: FirebaseTimestamp
  filtered?: boolean
}

export interface ReactionDocumentData {
  userId: string
  name: string
  dateAdded: FirebaseTimestamp
  filtered: boolean
}

export interface LiveChatStoreData {
  instance: any
  messageCollection: CollectionReference<DocumentData>
  reactionCollection: CollectionReference<DocumentData>
  messages: MessageDocumentData[]
  reactions: ReactionDocumentData[]
}
