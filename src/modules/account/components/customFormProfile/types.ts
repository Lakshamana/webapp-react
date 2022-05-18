import { Profile } from "generated/graphql"

export interface Props {
	fields?: any
	handleFormSubmit: (formData: Object) => void
	isLoading: boolean,
	user: Profile
}
