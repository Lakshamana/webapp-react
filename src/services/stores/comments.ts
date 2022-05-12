import create from 'zustand'
import { Comment } from 'generated/graphql'

interface IComments {
  hasMore?: boolean
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
  modalOption: IModal
  setTotalComments: (value: number) => void
  setUpdateCommentsStore: (value: IComments) => void
  setModalOption: (values: IModal) => void
  resetModal: () => void
}

export const useCommentsStore = create<CommentsState>((set) => ({
  commentsStore: { hasMore: false, totalComments: 0, allComments: [] },
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