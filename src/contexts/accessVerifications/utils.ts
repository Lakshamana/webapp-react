export const channelRoutes = (channelSlug?: string) => [
  `/c/${channelSlug}`,
  `/c/${channelSlug}/categories`,
  `/c/${channelSlug}/feed`,
  `/c/${channelSlug}/mylist`,
  `/c/${channelSlug}/lives`,
]

export const organizationRoutes = ['/channels', '/']
