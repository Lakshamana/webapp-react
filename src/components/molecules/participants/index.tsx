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
  
  return (
    <Flex alignItems="center">
      <Text color={colors.secondaryText[colorMode]} mr={2}>
        {t('page.post.participants')}
      </Text>
      <AvatarGroup size={isDesktop ? 'md' : 'sm'} max={2}>
        {/*TODO: Integrate with API.*/}
        {/* {participants?.map((item) => {
          return <Avatar showBorder key={item.id} src={item.img} />
        })} */}
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
      </AvatarGroup>
    </Flex>
  )
}

export { Participants }
