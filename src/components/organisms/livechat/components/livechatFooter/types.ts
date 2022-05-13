import { FlexboxProps } from '@chakra-ui/react'
import { LayoutProps, SpaceProps, GridProps } from 'styled-system'

export interface Props {
  sendMessage: (message: string) => void
  sendReaction: (reaction: string) => void
  reactions?: Reaction[]
  commentsEnabled?: boolean
  reactionsEnabled?: boolean
}

interface Reaction {
  id?: string
  dateAdded?: Date
  name?: string
  userId?: string
}

export interface StyledProps
  extends LayoutProps,
    FlexboxProps,
    SpaceProps,
    GridProps {}
