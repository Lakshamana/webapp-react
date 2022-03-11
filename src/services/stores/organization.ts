import create from 'zustand'
import { OrganizationPublic } from 'generated/graphql'

interface OrganizationState {
  organization: OrganizationPublic | null
  setOrganization: (organization: OrganizationPublic) => void
}

export const useOrganizationStore = create<OrganizationState>((set) => ({
  organization: null,
  setOrganization: (organization: OrganizationPublic) => {
    return set({ organization })
  },
}))
