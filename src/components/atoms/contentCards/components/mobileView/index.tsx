import {
  AspectRatio,
  Box,
  Flex,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer,
  Spinner,
  Text
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Button, ProgressBar } from 'components'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { useCustomizationStore, useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { MobileViewProps } from 'types/posts'
import { formattedSeconds, stripHTML } from 'utils/helperFunctions'
import { BlockedContent, MainContent } from './styles'

const MobileView = ({
  hasPinButton,
  isOpen,
  onClose,
  ...props
}: MobileViewProps) => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  const { activeChannelConfig } = useCustomizationStore()
  const isPostBlocked = props.isExclusive || props.isGeolocked

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
            <Box pos={'relative'}>
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

              {props?.progress && <ProgressBar value={props.progress} />}
              {isPostBlocked && (
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
                noOfLines={2}
                fontSize={'1.2rem'}
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
              <Flex my={4}>
                {activeChannelConfig?.SETTINGS
                  .DISPLAY_POST_THUMB_COUNT_VIEWS && (
                  <Text
                    display="flex"
                    alignItems="center"
                    fontSize="0.95rem"
                    color={colors.secondaryText[colorMode]}
                  >
                    {props.countViews || 0} {t('page.post.views')}
                  </Text>
                )}
                <Spacer px={1} />
                {props.mediaLength && (
                  <Flex alignItems={'center'}>
                    <Icon
                      width={18}
                      color={colors.secondaryText[colorMode]}
                      icon={'mdi:clock'}
                    />
                    <Text
                      display="flex"
                      alignItems="center"
                      fontSize="0.95rem"
                      ml={1}
                      color={colors.secondaryText[colorMode]}
                    >
                      {formattedSeconds(props?.mediaLength)}
                    </Text>
                  </Flex>
                )}
              </Flex>
              <Button
                onClick={() => history.push(`${props.url}`)}
                label={t('page.categories.view_post')}
              />
              {!props.progress && props.isLoading && (
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
              )}
              {hasPinButton && !props.progress && !props.isLoading && (
                <Button
                  mt={2}
                  variant={'outline'}
                  iconName={props.isPostPinned ? 'check' : 'plus-circle'}
                  label={t('page.categories.my_list')}
                  onClick={props.handlePinPost}
                />
              )}
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </MainContent>
  )
}

export { MobileView }
