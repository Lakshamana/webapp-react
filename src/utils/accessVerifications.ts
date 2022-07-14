import {
  Category,
  Channel,
  Kinds,
  LiveEvent,
  Post,
  SearchCategory,
  SearchLiveEvent,
  SearchPost,
} from 'generated/graphql'
import { AccessEnum } from 'types/access'

type EntityType =
  | Post
  | Category
  | LiveEvent
  | SearchCategory
  | SearchPost
  | SearchLiveEvent

export const isEntityOnPaywall = (entity: EntityType) => {
  return entity.access !== AccessEnum.AVAILABLE && entity.kind === Kinds.Paywall
}

export const isEntityPrivate = (entity: EntityType | Channel) => {
  return entity.kind === Kinds.Private
}

export const isEntityBlocked = (entity: EntityType) => {
  return isEntityOnPaywall(entity) || isEntityPrivate(entity)
}
