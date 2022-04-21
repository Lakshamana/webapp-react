import { Post, Kinds, Category, LiveEvent } from 'generated/graphql'

//TODO: Add LiveEvent
export const isEntityOnPaywall = (entity: Post | Category | LiveEvent) => {
  return entity.access === 'DENY' && entity.kind === Kinds.Paywall
}

export const isEntityPrivate = (entity: Post | Category | LiveEvent) => {
  return entity.kind === Kinds.Private
}

export const isEntityBlocked = (entity: Post | Category | LiveEvent) => {
  return isEntityOnPaywall(entity) || isEntityPrivate(entity)
}
