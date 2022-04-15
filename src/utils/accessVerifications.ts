import { Post, Kinds, Category } from 'generated/graphql'

//TODO: Add LiveEvent
export const isEntityOnPaywall = (entity: Post | Category) => {
  return entity.access === 'DENY' && entity.kind === Kinds.Paywall
}

export const isEntityPrivate = (entity: Post | Category) => {
  return entity.kind === Kinds.Private
}

export const isEntityBlocked = (entity: Post | Category) => {
  return isEntityOnPaywall(entity) || isEntityPrivate(entity)
}
