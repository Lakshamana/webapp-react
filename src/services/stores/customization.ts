import { colors } from 'styles'
import { setColor } from 'styles/colors'
import { ChannelFlags, FlagTypes, OrganizationFlags } from 'types/flags'
import create from 'zustand'

type CustomizationState = {
  customizationData: FlagTypes
  activeChannelConfig: Maybe<ChannelFlags>
  organizationConfig: Maybe<OrganizationFlags>
  setActiveChannelConfig: (activeChannelConfig: ChannelFlags) => void
  setOrganizationConfig: (organizationConfig: OrganizationFlags) => void
  setCustomizationData: (customizationData: FlagTypes) => void
}

export const useCustomizationStore = create<CustomizationState>((set) => ({
  activeChannelConfig: null,
  organizationConfig: null,
  customizationData: { ORGANIZATION: {}, CHANNELS: {} },
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
  setCustomizationData: (customizationData: FlagTypes) => {
    return set({ customizationData })
  },
}))
