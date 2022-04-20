import { useTranslation } from 'react-i18next'
import { InputCustom } from './style'
import { Props } from './types'

const InputDefault = ({
  value,
  onBlur,
  onChange,
  onSubmit
}: Props) => {
  const { t } = useTranslation()

  return (
    <InputCustom
      type="text"
      focusBorderColor="none"
      placeholder={t('page.post.add_a_comment')}
      name="description"
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onKeyDown={(e: any) => e.keyCode === 13 && onSubmit()}
    />
  )
}

export { InputDefault }
