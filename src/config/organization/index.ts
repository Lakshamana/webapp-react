import { OrganizationPublic } from 'generated/graphql'

export let organizationData: OrganizationPublic = {
  id: '',
}

export const setOrganizationData = (data: OrganizationPublic) => {
  organizationData = { ...data }
}
