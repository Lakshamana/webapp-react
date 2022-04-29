import { LayoutProps, SpaceProps, FlexboxProps } from 'styled-system'

export interface Props extends FlexboxProps, LayoutProps, SpaceProps {
  handleFormSubmit: (formData: any) => void
  dispatchError: () => void
  error: string
  isLoading: boolean
}
