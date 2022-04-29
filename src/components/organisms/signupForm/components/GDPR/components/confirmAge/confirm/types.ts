export interface ConfirmAgeProps {
	handleFormSubmit: () => void,
	handleAgeDecline: () => void,
	gdprAge: string
}

export type ConfirmAgeSteps = 'Confirm' | 'Reconfirm'