import { useMediaQuery } from '@chakra-ui/media-query'
import { Modal, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react'
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

  const DefineWrapper = ({ children }) => {
    const closeModal = () => {
      setHover(false)
      setMobileBehavior(false)
      onClose()
    }
    return (
      <Modal isOpen={isOpen} onClose={closeModal} isCentered>
        <ModalOverlay />
        <ModalContent
          color={colors.generalText[colorMode]}
          background={colors.cardBg[colorMode]}
        >
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
        <DefineWrapper>
          <PostCard
            hover={hover}
            defineAction={defineAction}
            actionHover={actionHover}
            categoryUnpinned={categoryUnpinned}
            {...props}
          />
        </DefineWrapper>
      }
    </>
  )
}

export { CategoryPostCard }
