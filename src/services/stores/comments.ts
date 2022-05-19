import create from 'zustand'
import { Comment } from 'generated/graphql'

interface IComments {
  hasMore?: boolean
  totalComments: number
  allComments: Comment[]
}

interface IReplies {
  [id: string]: IComments
}
interface IRepliesUpdate {
  id: string
  totalComments: number
  allComments: Comment[]
}

interface IModal {
  status: boolean,
  typeEvent: 'DELETE' | 'REPORT' | null
  id?: string
  text: string
  action: () => void
  loadingAction: boolean
}

type CommentsState = {
  commentsStore: IComments
  repliesStore: IReplies
  modalOption: IModal
  setTotalComments: (value: number) => void
  setUpdateCommentsStore: (value: IComments) => void
  setUpdateRepliesStore: (value: IRepliesUpdate) => void
  setModalOption: (values: IModal) => void
  resetModal: () => void
}

export const useCommentsStore = create<CommentsState>((set) => ({
  commentsStore: { hasMore: false, totalComments: 0, allComments: [] },
  repliesStore: {},
  modalOption: {
    status: false,
    typeEvent: null,
    text: '',
    action: () => { },
    loadingAction: false
  },
  setTotalComments: (totalComments: number) => set(state => ({
    commentsStore: {
      ...state.commentsStore,
      totalComments
    }
  })),
  setUpdateCommentsStore: (values: IComments) => set(state => ({
    commentsStore: {
      ...state.commentsStore,
      ...values
    }
  })),
  setUpdateRepliesStore: (values: IRepliesUpdate) => set(state => ({
    repliesStore: {
      ...state.repliesStore,
      [values.id]: {
        totalComments: values.totalComments,
        allComments: [...values.allComments]
      }
    }
  })),
  setModalOption: (values: IModal) => set(state => ({
    modalOption: {
      ...state.modalOption,
      ...values
    }
  })),
  resetModal: () => set({
    modalOption: {
      status: false,
      typeEvent: null,
      text: '',
      action: () => { },
      loadingAction: false
    }
  })
}))