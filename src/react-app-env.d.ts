/// <reference types="react-scripts" />

declare type Maybe<T> = T | null
declare type MaybeUndef<T> = T | null | undefined

declare interface Dictionary<T = any> {
  [key: string]: T
}
