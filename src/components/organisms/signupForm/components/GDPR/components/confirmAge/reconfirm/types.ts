export interface ConfirmAgeProps {
	handleFormSubmit: () => void,
	gdprAge: string
}

export type ConfirmAgeSteps = 'Confirm' | 'Reconfirm'