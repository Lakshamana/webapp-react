import {
  AspectRatio,
  Badge,
  Box,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Button } from 'components'
import { Status } from 'generated/graphql'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { stripHTML } from 'utils/helperFunctions'
import { BlockedContent, MainContent } from './styles'

type MobileViewProps = {
  title?: string
  description?: string
  url?: string
  thumbnail?: string
  status?: string | null
  isExclusive?: boolean
  isGeolocked?: boolean
  isOpen: boolean
  onClose: () => void
}

const MobileView = ({ isOpen, onClose, ...props }: MobileViewProps) => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  const isLiveEventBlocked = props.isExclusive || props.isGeolocked

  const isLive = props.status === Status.Live

  return (
    <MainContent>
      <Modal {...{ isOpen, onClose }} isCentered>
        <ModalOverlay background={'rgba(0, 0, 0, 0.85)'} />
        <ModalContent marginX={3} backgroundColor={colors.cardBg[colorMode]}>
          <ModalCloseButton
            zIndex={9999}
            autoFocus={false}
            borderRadius="50%"
            _focus={{ boxShadow: 'none' }}
            textColor={colors.generalText[colorMode]}
            background={colors.cardBg[colorMode]}
          />
          <Box>
            <Box position={'relative'}>
              <AspectRatio ratio={16 / 9}>
                <Image
                  borderTopRadius={'6px'}
                  objectPosition="center"
                  objectFit={'cover'}
                  boxSize={'auto'}
                  src={props.thumbnail}
                  htmlWidth="auto"
                  loading="lazy"
                />
              </AspectRatio>
              {isLiveEventBlocked && (
                <BlockedContent>
                  <Icon
                    width={25}
                    color={colors.white}
                    icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
                  />
                </BlockedContent>
              )}
              {isLive && (
                <Badge
                  position="absolute"
                  top="0"
                  left="0"
                  fontSize={'0.8rem'}
                  m={3}
                  fontWeight="700"
                  color={colors.generalText[colorMode]}
                  background={colors.brand.live_badges.live}
                >
                  Live
                </Badge>
              )}
            </Box>
            <Box
              paddingX={5}
              marginTop={props.thumbnail ? 2 : 6}
              marginBottom={5}
            >
              <Text
                py={2}
                fontWeight="bolder"
                fontSize={'1.2rem'}
                noOfLines={2}
                color={colors.generalText[colorMode]}
              >
                {stripHTML(props.title || '')}
              </Text>
              <Text
                fontSize={'0.95rem'}
                noOfLines={6}
                color={colors.secondaryText[colorMode]}
              >
                {stripHTML(props.description || '')}
              </Text>
              <Box my={5}>
                <Button
                  onClick={() => history.push(`${props.url}`)}
                  label={t('page.categories.watch_now')}
                />
              </Box>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </MainContent>
  )
}

export { MobileView }
