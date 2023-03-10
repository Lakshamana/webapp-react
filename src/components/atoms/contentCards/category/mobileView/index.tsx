import {
  AspectRatio,
  Box,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spinner,
  Text
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Button } from 'components'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { stripHTML } from 'utils/helperFunctions'
import { BlockedContent, MainContent } from './styles'

type MobileViewProps = {
  id: string
  url?: string
  thumbnail?: string
  title?: string
  description?: Maybe<string>
  isCategoryPinned?: boolean
  isExclusive?: boolean
  isGeolocked?: boolean
  isLoading: boolean
  isOpen: boolean
  onClose: () => void
  handlePinCategory: () => void
}

const MobileView = ({ isOpen, onClose, ...props }: MobileViewProps) => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  const isCategoryBlocked = props.isExclusive || props.isGeolocked

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
              {isCategoryBlocked && (
                <BlockedContent>
                  <Icon
                    width={25}
                    color={colors.white}
                    icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
                  />
                </BlockedContent>
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
                  iconName={'play'}
                  label={t('page.categories.watch_now')}
                />
                {props.isLoading ? (
                  <Button mt={2} variant={'outline'} disabled>
                    <Spinner
                      thickness="1px"
                      width="15px"
                      height="15px"
                      mr={2}
                      color={colors.brand.primary[colorMode]}
                    />
                    <Text>{t('page.categories.my_list')}</Text>
                  </Button>
                ) : (
                  <Button
                    mt={2}
                    variant={'outline'}
                    iconName={props.isCategoryPinned ? 'check' : 'plus-circle'}
                    label={t('page.categories.my_list')}
                    onClick={props.handlePinCategory}
                  />
                )}
              </Box>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </MainContent>
  )
}

export { MobileView }
