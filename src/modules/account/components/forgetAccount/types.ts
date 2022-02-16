import { ForgetAccountInput } from 'generated/graphql';

export interface Props {
  forgetAccount: (payload: ForgetAccountInput) => void
  isLoading: boolean
  error: string
  dispatchAlert: () => void
}
