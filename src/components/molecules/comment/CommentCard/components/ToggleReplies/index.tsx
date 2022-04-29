import { useTranslation } from 'react-i18next'
import { Center } from '@chakra-ui/layout'
import { Icon } from '@iconify/react'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { IProps } from './types'

const ToggleReplies = ({ count, state = false, action }: IProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()

  const defineMessage = () => {
    const stateMessage = t(state
      ? 'page.post.comment.hide'
      : 'page.post.comment.see'
    )
    const countMessage = count === 1
      ? t('page.post.comment.reply')
      : t('page.post.comment.replies')
    return (`${stateMessage} ${count} ${countMessage}`).toUpperCase()
  }

  return (
    <Center
      color={colors.brand.primary[colorMode]}
      mt={2}
      fontSize={'0.8rem'}
      onClick={action}
      cursor={'pointer'}
      width={'fit-content'}
    >
      <Icon
        icon={state ? 'bx:bx-chevron-up' : 'bx:bx-chevron-down'}
        width={20}
        height={20}
      />
      {defineMessage()}
    </Center>
  )
}

export { ToggleReplies }
