import { Social } from 'services/firebase'

export interface Props {
	errors?: any
	handleFormSubmit: (formData: any) => void
	handleSocialSubmit: (kind: Social) => void
	dispatchError: () => void
	isLoading: boolean
	error: string
}
