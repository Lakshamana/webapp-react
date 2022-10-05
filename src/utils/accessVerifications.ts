import {
  Category,
  Channel,
  Kinds,
  LiveEvent,
  Organization,
  Post,
  SearchCategory,
  SearchLiveEvent,
  SearchPost
} from 'generated/graphql'
import { AccessEnum } from 'types/access'
import { ChannelStorageData } from 'types/channel'

type EntityType =
  | Post
  | Category
  | LiveEvent
  | SearchCategory
  | SearchPost
  | SearchLiveEvent
  | Channel
  | Organization
  | ChannelStorageData

export const isEntityOnPaywall = (entity: EntityType) => {
  return entity.access !== AccessEnum.AVAILABLE && entity.kind === Kinds.Paywall
}

export const isEntityPrivate = (entity: EntityType) => {
  return entity.kind === Kinds.Private
}

export const isEntityGeolocked = (entity: EntityType) => {
  return entity.access === AccessEnum.GEOLOCKED
}

export const isEntityExclusive = (entity: EntityType) => {
  return isEntityOnPaywall(entity) || isEntityPrivate(entity)
}

export const entityRequireLogin = (entity: EntityType) => {
  return entity.kind === Kinds.Exclusive
}

export const isEntityBlocked = (entity: EntityType) => {
  return (
    isEntityOnPaywall(entity) ||
    isEntityPrivate(entity) ||
    isEntityGeolocked(entity)
  )
}
