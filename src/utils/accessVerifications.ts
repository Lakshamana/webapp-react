import {
  Post,
  Kinds,
  Category,
  LiveEvent,
  Channel,
} from 'generated/graphql'
import { AccessEnum } from 'types/access'

export const isEntityOnPaywall = (entity: Post | Category | LiveEvent) => {
  return entity.access !== AccessEnum.AVAILABLE && entity.kind === Kinds.Paywall
}

export const isEntityPrivate = (
  entity: Post | Category | LiveEvent | Channel
) => {
  return entity.kind === Kinds.Private
}

export const isEntityBlocked = (entity: Post | Category | LiveEvent) => {
  return isEntityOnPaywall(entity) || isEntityPrivate(entity)
}
