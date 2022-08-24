import { useMutation } from '@apollo/client'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useDisclosure } from '@chakra-ui/react'
import { Modal as MobileViewModal } from 'components'
import { useAccessVerifications } from 'contexts/accessVerifications'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import {
  MUTATION_PIN_CATEGORY,
  MUTATION_UNPIN_CATEGORY
} from 'services/graphql'
import { useAuthStore } from 'services/stores'
import { breakpoints } from 'styles'
import { CategoryPostCardProps } from 'types/categories'
import { MobileView } from './mobileView'
import { PostCard } from './postCard'

const CategoryPostCard = ({
  categoryUnpinned,
  ...props
}: CategoryPostCardProps) => {
  const history = useHistory()
  const [isCategoryPinned, setIsCategoryPinned] = useState(false)
  const [hover, setHover] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const { showActionNotAllowedAlert } = useAccessVerifications()
  const { isAnonymousAccess } = useAuthStore()

  useEffect(() => {
    setIsCategoryPinned(props.isPinned || false)
  }, [props.isPinned])

  //TODO: remove this logic from here! Use a store
  const [pinCategory, { loading: loadingPinCategory }] = useMutation(
    MUTATION_PIN_CATEGORY,
    {
      variables: {
        payload: {
          category: props.id,
          pinned: true,
        },
      },
      onCompleted: (result) => {
        setIsCategoryPinned(result?.pinCategory?.pinned)
      },
    }
  )

  //TODO: remove this logic from here! Use a store
  const [unpinCategory, { loading: loadingUnpinCategory }] = useMutation(
    MUTATION_UNPIN_CATEGORY,
    {
      variables: {
        id: props.id,
      },
      onCompleted: (result) => {
        setIsCategoryPinned(result?.unpinCategory?.pinned)
      },
    }
  )

  const isLoading = loadingPinCategory || loadingUnpinCategory

  const actionHover = (status: boolean) => () => {
    if (isDesktop) setHover(status)
  }

  const selectCategory = () => isDesktop ? history.push(`${props.url}`) : onOpen()

  return (
    <>
      <PostCard
        hover={hover}
        actionHover={actionHover}
        isLoading={isLoading}
        pinCategory={
          isAnonymousAccess ? showActionNotAllowedAlert : pinCategory
        }
        unpinCategory={unpinCategory}
        isCategoryPinned={isCategoryPinned}
        onClickCard={selectCategory}
        {...props}
      />
      <MobileViewModal
        onClose={onClose}
        defaultActions={false}
        isOpen={isOpen}
        isCentered
        closeButton
      >
        <MobileView
          isLoading={isLoading}
          isCategoryPinned={isCategoryPinned}
          handlePinCategory={isCategoryPinned ? unpinCategory : pinCategory}
          {...props}
        />
      </MobileViewModal>
    </>
  )
}

export { CategoryPostCard }
