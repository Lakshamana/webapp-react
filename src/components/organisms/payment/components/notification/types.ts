export interface Props {
  isOpen, 
  onClose, 
  modalType: ModalType
}

export enum ModalType {
  success = 'success',
  failure = 'failure',
}