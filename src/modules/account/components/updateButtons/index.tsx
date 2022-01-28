import { Flex } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { Button } from 'components'
import { Props } from './types'

const UpdateButtons = ({
  editFormActive,
  isLoadingAction,
  handleSubmit,
  handleIsEditing,
  resetValues,
}: Props) => {
  const { t } = useTranslation()
  const btnFontSize = '14px'
  return (
    <Flex alignItems="center" justifyContent="end" mt={editFormActive ? 10 : 0} paddingY={'10px'}>
      {editFormActive ? (
        <>
          <Button
            size="sm"
            mr={5}
            fontSize={btnFontSize}
            iconName={'content-save'}
            width={'auto'}
            variant="link"
            isLoading={isLoadingAction}
            label={t('common.save')}
            onClick={() => handleSubmit()}
          ></Button>
          <Button
            size="sm"
            fontSize={btnFontSize}
            width={'auto'}
            variant="link"
            label={t('common.cancel')}
            onClick={() => {
              handleIsEditing(false)
              resetValues()
            }}
          ></Button>
        </>
      ) : (
        <Button
          size="sm"
          fontSize={btnFontSize}
          width={'auto'}
          variant="link"
          label="Update"
          onClick={() => handleIsEditing(true)}
        ></Button>
      )}
    </Flex>
  )
}
export { UpdateButtons }
