import create from 'zustand'
import { ResponseOrganizationOutput } from 'generated/graphql'

interface OrganizationState {
  organization: ResponseOrganizationOutput | null
  setOrganization: (organization: ResponseOrganizationOutput) => void
}

export const useOrganizationStore = create<OrganizationState>((set) => ({
  organization: null,
  setOrganization: (organization: ResponseOrganizationOutput) => {
    return set({ organization })
  },
}))
