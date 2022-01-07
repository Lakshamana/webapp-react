export interface ConfirmAgeProps {
	handleFormSubmit: () => void
	onCancel: () => void
	userEmail?: string
	gdprAge: string
}

export type ConfirmAgeSteps = 'Confirm' | 'Reconfirm' | 'ConfirmEmail'