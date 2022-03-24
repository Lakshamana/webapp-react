import create from 'zustand'
import { ChannelFlags, OrganizationFlags } from 'types/flags'
import { setColor } from 'styles/colors'

type CustomizationState = {
  activeChannelConfig: Maybe<ChannelFlags>
  organizationConfig: Maybe<OrganizationFlags>
  setActiveChannelConfig: (activeChannelConfig: ChannelFlags) => void
  setOrganizationConfig: (organizationConfig: OrganizationFlags) => void
}

export const useCustomizationStore = create<CustomizationState>((set) => ({
  activeChannelConfig: null,
  organizationConfig: null,
  setActiveChannelConfig: (activeChannelConfig: ChannelFlags) => {
    setColor(activeChannelConfig.COLORS)
    return set({ activeChannelConfig })
  },
  setOrganizationConfig: (organizationConfig: OrganizationFlags) => {
    setColor(organizationConfig.COLORS)
    return set({ organizationConfig })
  },
}))
