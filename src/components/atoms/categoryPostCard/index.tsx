import { useMediaQuery } from '@chakra-ui/media-query'
import { Container, Modal, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { useThemeStore } from 'services/stores'
import { breakpoints, colors } from 'styles'
import { CategoryPostCardProps } from 'types/categories'
import { PostCard } from './postCard'

const CategoryPostCard = ({ categoryUnpinned, ...props }: CategoryPostCardProps) => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const [hover, setHover] = useState(false)
  const [mobileBehavior, setMobileBehavior] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

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
        categoryUnpinned={categoryUnpinned}
        mobileBehavior={mobileBehavior}
        {...props}
      />
      {
        !isDesktop &&
        <ModalWrapper>
          <PostCard
            modalType
            hover={hover}
            defineAction={defineAction}
            actionHover={actionHover}
            categoryUnpinned={categoryUnpinned}
            {...props}
          />
        </ModalWrapper>
      }
    </>
  )
}

export { CategoryPostCard }
