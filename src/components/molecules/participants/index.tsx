import { AvatarGroup, Avatar, Flex } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useThemeStore } from 'services/stores'
import { useTranslation } from 'react-i18next'
import { Text } from 'components'
import { colors, breakpoints } from 'styles'
import { Props } from './types'

const Participants = ({ participants }: Props) => {
  const { colorMode } = useThemeStore()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const { t } = useTranslation()

  if (!participants?.length) return <div></div>

  return (
    <Flex alignItems="center">
      <Text color={colors.secondaryText[colorMode]} mr={2}>
        {t('page.post.participants')}
      </Text>
      <AvatarGroup size={isDesktop ? 'md' : 'sm'} max={2}>
        {participants?.map((item) => {
          return <Avatar showBorder key={item.name} src={item.avatar} name={item.name} />
        })}
      </AvatarGroup>
    </Flex>
  )
}

export { Participants }
