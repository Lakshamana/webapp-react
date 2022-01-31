export interface Props {
    editFormActive: boolean
    isLoadingAction: boolean
    handleSubmit: () => void
    handleIsEditing: (value: boolean) => void
    resetValues: () => void
}