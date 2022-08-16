import { useMutation } from '@apollo/client'
import { Box, Flex, Spacer, Spinner, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { useAccessVerifications } from 'contexts/accessVerifications'
import { useEffect, useState } from 'react'
import {
  MUTATION_PIN_CATEGORY,
  MUTATION_UNPIN_CATEGORY
} from 'services/graphql'
import { useAuthStore, useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { CategoryPostCardProps } from 'types/categories'
import { stripHTML, stripHTMLExceptLineBreaks } from 'utils/helperFunctions'

const DetailCard = ({ categoryUnpinned, ...props }: CategoryPostCardProps) => {
  const { colorMode } = useThemeStore()
  const [isCategoryPinned, setIsCategoryPinned] = useState(false)
  const { isAnonymousAccess } = useAuthStore()
  const { showActionNotAllowedAlert } = useAccessVerifications()

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
        if (categoryUnpinned) categoryUnpinned(props.id)
        setIsCategoryPinned(result?.unpinCategory?.pinned)
      },
    }
  )

  const isLoading = loadingPinCategory || loadingUnpinCategory

  const handlePinCategory = () => {
    if (isAnonymousAccess) {
      showActionNotAllowedAlert()
      return
    }
    isCategoryPinned ? unpinCategory() : pinCategory()
  }

  const RenderAddToMyListIcon = () => (
    <Box
      borderColor="red"
      backgroundColor={colors.cardBg[colorMode]}
      borderRadius="100%"
      minWidth="25px"
      height="25px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={handlePinCategory}
    >
      {isLoading ? (
        <Spinner
          thickness="1px"
          width="15px"
          height="15px"
          color={colors.brand.primary[colorMode]}
        />
      ) : (
        <Icon
          icon={isCategoryPinned ? 'mdi:check' : 'mdi:plus'}
          width={props.modalType ? 22 : 16}
          color={
            isCategoryPinned
              ? colors.brand.primary[colorMode]
              : colors.generalText[colorMode]
          }
        />
      )}
    </Box>
  )

  return (
    <Box
      position="absolute"
      padding="0.6rem"
      borderBottomLeftRadius="4px"
      borderBottomRightRadius="4px"
      w={'100%'}
      background={colors.footerBg[colorMode]}
    >
      <Flex>
        <Box display="flex" flexDirection="column">
          <Text
            fontSize={props.modalType ? "1.2rem" : "0.85rem"}
            noOfLines={1}
            fontWeight="bolder"
            color={colors.generalText[colorMode]}
          >
            {stripHTML(props.title || '')}
          </Text>
          <Text
            fontSize={props.modalType ? "0.9rem" : "0.7rem"}
            noOfLines={2}
            color={colors.secondaryText[colorMode]}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: stripHTMLExceptLineBreaks(props.description || ''),
              }}
            />
          </Text>
        </Box>
        <Spacer px={1}></Spacer>
        <RenderAddToMyListIcon />
      </Flex>
    </Box>
  )
}

export { DetailCard }
