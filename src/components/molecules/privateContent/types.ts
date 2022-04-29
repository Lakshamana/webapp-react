export type Props = { 
    requestAccess: (password: string) => void
    isLoadingRequest: boolean
    error: string
}