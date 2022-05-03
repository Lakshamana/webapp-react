import { Post, Kinds, Category, LiveEvent, PostAccess } from 'generated/graphql'

export const isEntityOnPaywall = (entity: Post | Category | LiveEvent) => {
  return entity.access !== PostAccess.Granted && entity.kind === Kinds.Paywall
}

export const isEntityPrivate = (entity: Post | Category | LiveEvent) => {
  return entity.kind === Kinds.Private
}

export const isEntityBlocked = (entity: Post | Category | LiveEvent) => {
  return isEntityOnPaywall(entity) || isEntityPrivate(entity)
}
