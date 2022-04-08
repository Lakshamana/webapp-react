import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text } from 'components'
import { Spinner } from '@chakra-ui/spinner'
import { useMutation } from '@apollo/client'
import {
  MUTATION_PIN_CATEGORY,
  MUTATION_UNPIN_CATEGORY,
} from 'services/graphql'
import { useThemeStore } from 'services/stores'
import { BoxButtons, ContentButton } from '../BillboardItems/style'
import { colors } from 'styles'
import { Props } from './types'

const CategoryButtons = ({ ...props }: Props) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()

  const [isCategoryPinned, setIsCategoryPinned] = useState(false)

  useEffect(() => {
    setIsCategoryPinned(props.isPinned || false)
  }, [props.isPinned])

  const [pinCategory, { loading: loadingPinCategory }] = useMutation(
    MUTATION_PIN_CATEGORY,
    {
      variables: {
        payload: {
          category: props.categoryId,
          pinned: true,
        },
      },
      onCompleted: (result) => {
        setIsCategoryPinned(result?.pinCategory?.pinned)
      },
    }
  )

  const [unpinCategory, { loading: loadingUnpinCategory }] = useMutation(
    MUTATION_UNPIN_CATEGORY,
    {
      variables: {
        id: props.categoryId,
      },
      onCompleted: (result) => {
        setIsCategoryPinned(result?.unpinCategory?.pinned)
      },
    }
  )

  const isLoading = loadingPinCategory || loadingUnpinCategory

  return (
    <BoxButtons>
      <ContentButton>
        <Button
          iconName={'play'}
          label={t('page.categories.watch_now')}
          width={'100%'}
          height={'100%'}
        />
      </ContentButton>
      <ContentButton>
        {!isLoading && (
          <Button
            backgroundColor={`${colors.grey['800']}`}
            variant={'unstyled'}
            iconName={isCategoryPinned ? 'check' : 'plus-circle'}
            color={`${colors.white}`}
            width={'100%'}
            height={'100%'}
            label={t('page.categories.my_list')}
            onClick={() => isCategoryPinned ? unpinCategory() : pinCategory()}

          />
        )}

        {isLoading && (
          <Button
            backgroundColor={`${colors.grey['800']}`}
            variant={'unstyled'}
            color={`${colors.white}`}
            width={'100%'}
            height={'100%'}
            disabled={true}
          >
            <Spinner
              thickness="1px"
              width="15px"
              height="15px"
              mr={2}
              color={colors.brand.primary[colorMode]}
            />
            <Text>{t('page.categories.my_list')}</Text>
          </Button>
        )}
      </ContentButton>
    </BoxButtons>
  )
}

export { CategoryButtons }
