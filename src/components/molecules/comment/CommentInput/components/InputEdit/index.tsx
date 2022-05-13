import { useTranslation } from 'react-i18next'
import { Input } from '@chakra-ui/react'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { Props } from './types'

const InputEdit = ({
  value,
  onBlur,
  onChange,
  onSubmit
}: Props) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()

  return (
    <Input
      name="description"
      variant='flushed'
      placeholder={t('page.post.add_a_comment')}
      value={value}
      color={colors.inputText[colorMode]}
      onBlur={onBlur}
      onChange={onChange}
      onKeyDown={(e: any) => e.keyCode === 13 && onSubmit()}
      borderBottomColor={colors.brand.primary[colorMode]}
    />
  )
}

export { InputEdit }
