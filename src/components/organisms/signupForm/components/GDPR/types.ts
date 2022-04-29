export interface GDPRProps {
    handleFormSubmit: () => void
    onCancel: () => void
    userEmail?: string
    isLoading: boolean
}