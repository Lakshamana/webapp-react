import { useMediaQuery } from '@chakra-ui/media-query'
import {
  useDisclosure
} from '@chakra-ui/react'
import { Modal as MobileViewModal } from 'components'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { breakpoints } from 'styles'
import { LivestreamPostCardProps } from 'types/livestreams'
import { MobileView } from './mobileView'
import { PostCard } from './postCard'

const LivestreamPostCard = ({ ...props }: LivestreamPostCardProps) => {
  const history = useHistory()
  const [hover, setHover] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

  const actionHover = (status: boolean) => () => {
    if (isDesktop) setHover(status)
  }

  const selectLive = () => {
    isDesktop ? history.push(`${props.url}`) : onOpen()
  }

  return (
    <>
      <PostCard
        hover={hover}
        actionHover={actionHover}
        onClickCard={selectLive}
        {...props}
      />
      <MobileViewModal
        onClose={onClose}
        defaultActions={false}
        isOpen={isOpen}
        isCentered
        closeButton
      >
        <MobileView {...props} />
      </MobileViewModal>
    </>
  )
}

export { LivestreamPostCard }
