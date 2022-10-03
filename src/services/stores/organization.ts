import { Organization } from 'generated/graphql'
import create from 'zustand'

interface OrganizationState {
  organization: Maybe<Organization>
  setOrganization: (organization: Organization) => void
}

export const useOrganizationStore = create<OrganizationState>((set) => ({
  organization: null,
  setOrganization: (organization: Organization) => {
    return set({ organization })
  },
}))
