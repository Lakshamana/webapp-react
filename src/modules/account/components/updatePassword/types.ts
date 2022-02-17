import { UpdatePasswordOnlyInput } from 'generated/graphql';
import { AlertObjectType } from 'types/common';

export interface Props {
  updatePassword: (payload: UpdatePasswordOnlyInput) => void
  isLoading: boolean
  errorMessage?: string
  successMessage?: string
  alertMessageType?: AlertObjectType | null
  dispatchAlert: () => void
}
