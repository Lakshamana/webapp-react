export interface Props {
  isOpen, 
  onClose, 
  modalType: ModalType,
  refetch: () => void
}

export enum ModalType {
  success = 'success',
  failure = 'failure',
}