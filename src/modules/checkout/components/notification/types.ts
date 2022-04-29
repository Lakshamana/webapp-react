export interface Props {
  isOpen, 
  onOpen, 
  onClose, 
  modalType: ModalType
}

export enum ModalType {
  success = 'success',
  failure = 'failure',
}