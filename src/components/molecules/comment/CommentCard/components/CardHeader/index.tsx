import { useTranslation } from 'react-i18next'
import { Flex, GridItem, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Text, Avatar } from 'components'
import { colors } from 'styles'
import { useThemeStore } from 'services/stores'
import { translateFormatDistance } from 'utils/helperFunctions'
import { IOption, IProps } from './types'

const CardHeader = ({ author, createdAt }: IProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()

  const defineOptions = [
    {
      icon: 'bi:flag-fill',
      text: t('page.post.comment.report')
    },
    {
      icon: 'clarity:note-edit-solid',
      text: t('page.post.comment.edit')
    },
    {
      icon: 'fluent:delete-20-filled',
      text: t('page.post.comment.delete')
    }
  ]

  return (
    <>
      <GridItem>
        {/* //TODO: missing avatar url */}
        <Avatar
          width={'36px'}
          height={'36px'}
          name={String(author?.username)}
          src={''}
          backgroundColor={colors.brand.primary[colorMode]}
        />
      </GridItem>
      <GridItem>
        <Flex alignItems="center">
          <Text
            color={colors.generalText[colorMode]}
            fontSize={'18px'}
            fontWeight={700}
          >
            {author?.username}
          </Text>
          <Text
            color={colors.secondaryText[colorMode]}
            ml={2}
            mr={2}
            fontSize={'14px'}
          >
            {translateFormatDistance(createdAt)}
          </Text>
          <Menu>
            <MenuButton
              color={colors.secondaryText[colorMode]}
              _hover={{ color: colors.brand.primary[colorMode] }}
            >
              <Icon icon={'bi:three-dots'} height={20} />
            </MenuButton>
            <MenuList
              color={colors.comments[colorMode]}
              backgroundColor={colors.livechatBg[colorMode]}
            >
              {
                defineOptions.map((option: IOption) => (
                  <MenuItem
                    key={`option-${option.icon}`}
                    _hover={{ color: colors.brand.primary[colorMode] }}>
                    <Icon icon={option.icon} height={20} />
                    <Text ml={2}>{option.text}</Text>
                  </MenuItem>
                ))
              }
            </MenuList>
          </Menu>
        </Flex>
      </GridItem>
    </>
  )
}

export { CardHeader }