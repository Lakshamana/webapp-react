import create from 'zustand'
import { ChannelFlags, OrganizationFlags } from 'types/flags'
import { setColor } from 'styles/colors'
import { colors } from 'styles'

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
    if (activeChannelConfig?.COLORS) setColor(activeChannelConfig.COLORS)
    return set({ activeChannelConfig })
  },
  setOrganizationConfig: (organizationConfig: OrganizationFlags) => {
    if (
      organizationConfig?.COLORS &&
      !(colors.brand.primary.dark && colors.brand.primary.light)
    )
      setColor(organizationConfig.COLORS)
    return set({ organizationConfig })
  },
}))
