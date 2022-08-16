import { useMutation } from '@apollo/client'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Container, Modal, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { useAccessVerifications } from 'contexts/accessVerifications'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { MUTATION_PIN_POST, MUTATION_UNPIN_POST } from 'services/graphql'
import { useAuthStore, useThemeStore } from 'services/stores'
import { breakpoints, colors } from 'styles'
import { VideoPostCardProps } from 'types/posts'
import { PostCard } from './postCard'

const VideoPostCard = ({ postUnpinned, ...props }: VideoPostCardProps) => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const [hover, setHover] = useState(false)
  const [isPostPinned, setIsPostPinned] = useState(false)
  const [mobileBehavior, setMobileBehavior] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const { isAnonymousAccess} = useAuthStore()
  const { showActionNotAllowedAlert } = useAccessVerifications()

  useEffect(() => {
    setIsPostPinned(props.isPinned || false)
  }, [props.isPinned])

  //TODO: Remove logic from here!
  const [pinPost, { loading: loadingPinPost }] = useMutation(
    MUTATION_PIN_POST,
    {
      variables: { payload: { post: props.id, pinned: true } },
      onCompleted: (result) => setIsPostPinned(result?.pinPost?.pinned)
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
    if (isDesktop) {
      setHover(status)
      setMobileBehavior(false)
    }
  }

  const defineAction = () => {
    if (isDesktop || mobileBehavior) {
      history.push(`${props.url}`)
      return
    }
    setHover(true)
    setMobileBehavior(true)
    onOpen()
  }


  const ModalWrapper = ({ children }) => {
    const closeModal = () => {
      setHover(false)
      setMobileBehavior(false)
      onClose()
    }
    return (
      <Modal
        size={'xs'}
        isOpen={isOpen}
        onClose={closeModal}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          color={colors.generalText[colorMode]}
          background={colors.cardBg[colorMode]}
        >
          <Container
            zIndex={999}
            className='absolute'
            color={colors.generalText[colorMode]}
          >
            <ModalCloseButton backgroundColor={colors.cardBg[colorMode]} rounded={'full'} />
          </Container>
          {children}
        </ModalContent>
      </Modal>
    )
  }

  return (
    <>
      <PostCard
        hover={hover}
        defineAction={defineAction}
        actionHover={actionHover}
        mobileBehavior={mobileBehavior}
        isLoading={isLoading}
        pinPost={isAnonymousAccess ? showActionNotAllowedAlert : pinPost}
        unpinPost={unpinPost}
        isPostPinned={isPostPinned}
        {...props}
      />
      {
        !isDesktop &&
        <ModalWrapper>
          <PostCard
            hover={hover}
            defineAction={defineAction}
            actionHover={actionHover}
            isLoading={isLoading}
            pinPost={isAnonymousAccess ? showActionNotAllowedAlert : pinPost}
            unpinPost={unpinPost}
            isPostPinned={isPostPinned}
            {...props}
          />
        </ModalWrapper>
      }
    </>
  )
}

export { VideoPostCard }
