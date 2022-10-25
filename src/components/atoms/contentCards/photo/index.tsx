import { useMutation } from '@apollo/client'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useDisclosure } from '@chakra-ui/react'
import { useAccessVerifications } from 'contexts/accessVerifications'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { MUTATION_PIN_POST, MUTATION_UNPIN_POST } from 'services/graphql'
import { useAuthStore } from 'services/stores'
import { breakpoints } from 'styles'
import { GeneralPostCardProps } from 'types/posts'
import { MobileView, PostCard } from '../components'

const PhotoPostCard = ({
  postUnpinned,
  hasPinButton = true,
  ...props
}: GeneralPostCardProps) => {
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

  //TODO: create hooke to pin/unpin post
  const [pinPost, { loading: loadingPinPost }] = useMutation(
    MUTATION_PIN_POST,
    {
      variables: { payload: { post: props.id, pinned: true } },
      onCompleted: (result) => setIsPostPinned(result?.pinPost?.pinned),
    }
  )

  //TODO: create hooke to pin/unpin post
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
      <MobileView
        handlePinPost={isPostPinned ? unpinPost : pinPost}
        {...{
          isLoading,
          isPostPinned,
          hasPinButton,
          isOpen,
          onClose,
          ...props,
        }}
      />
    </>
  )
}

export { PhotoPostCard }
