import { useMutation } from '@apollo/client'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useDisclosure } from '@chakra-ui/react'
import { Modal as MobileViewModal } from 'components'
import { useAccessVerifications } from 'contexts/accessVerifications'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { MUTATION_PIN_POST, MUTATION_UNPIN_POST } from 'services/graphql'
import { useAuthStore } from 'services/stores'
import { breakpoints } from 'styles'
import { VideoPostCardProps } from 'types/posts'
import { MobileView } from './mobileView'
import { PostCard } from './postCard'

const VideoPostCard = ({
  postUnpinned,
  hasPinButton = true,
  ...props
}: VideoPostCardProps) => {
  const history = useHistory()

  const [hover, setHover] = useState(false)
  const [isPostPinned, setIsPostPinned] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const { isAnonymousAccess } = useAuthStore()
  const { showActionNotAllowedAlert } = useAccessVerifications()

  useEffect(() => {
    setIsPostPinned(props.isPinned || false)
  }, [props.isPinned])

  //TODO: Remove logic from here!
  const [pinPost, { loading: loadingPinPost }] = useMutation(
    MUTATION_PIN_POST,
    {
      variables: { payload: { post: props.id, pinned: true } },
      onCompleted: (result) => setIsPostPinned(result?.pinPost?.pinned),
    }
  )

  //TODO: remove logic from here!!
  const [unpinPost, { loading: loadingUnpinPost }] = useMutation(
    MUTATION_UNPIN_POST,
    {
      variables: { id: props.id },
      onCompleted: (result) => {
        if (postUnpinned) postUnpinned(props.id)
        setIsPostPinned(result?.unpinPost?.pinned)
      },
    }
  )

  const isLoading = loadingPinPost || loadingUnpinPost

  const actionHover = (status: boolean) => () => {
    if (isDesktop) setHover(status)
  }

  const selectPost = () => {
    isDesktop ? history.push(`${props.url}`) : onOpen()
  }

  return (
    <>
      <PostCard
        hasClickedOnCard={selectPost}
        pinPost={isAnonymousAccess ? showActionNotAllowedAlert : pinPost}
        {...{
          hasPinButton,
          hover,
          isLoading,
          isPostPinned,
          actionHover,
          unpinPost,
          ...props,
        }}
      />
      <MobileViewModal
        isCentered
        closeButton
        defaultActions={false}
        {...{ onClose, isOpen }}
      >
        <MobileView
          handlePinPost={isPostPinned ? unpinPost : pinPost}
          {...{ isLoading, isPostPinned, hasPinButton, ...props }}
        />
      </MobileViewModal>
    </>
  )
}

export { VideoPostCard }
