import { useMutation } from '@apollo/client'
import { Spinner } from '@chakra-ui/spinner'
import { Button, Text } from 'components'
import { useAccessVerifications } from 'contexts/accessVerifications'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import {
  MUTATION_PIN_CATEGORY,
  MUTATION_UNPIN_CATEGORY
} from 'services/graphql'
import { useAuthStore, useChannelsStore, useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { BoxButtons, ContentButton } from '../BillboardItems/style'
import { Props } from './types'

const CategoryButtons = ({ ...props }: Props) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const history = useHistory()
  const { activeChannel } = useChannelsStore()

  const [isCategoryPinned, setIsCategoryPinned] = useState(false)
  const { showActionNotAllowedAlert } = useAccessVerifications()
  const { isAnonymousAccess } = useAuthStore()

  const url = `/c/${activeChannel?.slug}/category/${props.categorySlug}`

  useEffect(() => {
    setIsCategoryPinned(props.isPinned || false)
  }, [props.isPinned])

  //TODO: Remove this logic from here! Create a store to handle pin/unpin category
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

  //TODO: Remove this logic from here! Create a store to handle pin/unpin category
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

  const handlePinCategory = () => {
    if (isAnonymousAccess) {
      showActionNotAllowedAlert()
      return
    }
    isCategoryPinned ? unpinCategory() : pinCategory()
  }

  const isLoading = loadingPinCategory || loadingUnpinCategory

  return (
    <BoxButtons>
      <ContentButton>
        <Button
          iconName={'play'}
          label={t('page.categories.watch_now')}
          width={'100%'}
          height={'100%'}
          onClick={() => history.push(url)}
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
            onClick={handlePinCategory}
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
