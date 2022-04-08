import { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router'
import { Flex, Text, Box, Spacer, Spinner } from '@chakra-ui/react'
import {
  MUTATION_PIN_CATEGORY,
  MUTATION_UNPIN_CATEGORY,
} from 'services/graphql'
import { Icon } from '@iconify/react'

import { useThemeStore } from 'services/stores'
import { CategoryPostCardProps } from 'types/categories'
import { colors } from 'styles'
import { CardWrapper, PostContent } from './style'

const CategoryPostCard = ({ ...props }: CategoryPostCardProps) => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const [hover, setHover] = useState(false)
  const [isCategoryPinned, setIsCategoryPinned] = useState(false)

  useEffect(() => {
    setIsCategoryPinned(props.isPinned || false)
  }, [props.isPinned])

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
      }
    }
  )

  const [unpinCategory, { loading: loadingUnpinCategory }] = useMutation(
    MUTATION_UNPIN_CATEGORY,
    {
      variables: {
        id: props.id,
      },
      onCompleted: (result) => {
        setIsCategoryPinned(result?.unpinCategory?.pinned)
      }
    }
  )

  const isLoading = loadingPinCategory || loadingUnpinCategory

  const selectCategory = () => history.push(`${props.url}`)

  const renderAddToMyListIcon = () => (
    <Box
      borderColor="red"
      backgroundColor={colors.cardBg[colorMode]}
      borderRadius="100%"
      width="25px"
      height="25px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={() => (isCategoryPinned ? unpinCategory() : pinCategory())}
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
    <CardWrapper
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      <PostContent onClick={selectCategory} {...props} />
      {hover && (
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
                fontSize="0.85rem"
                noOfLines={1}
                fontWeight="bolder"
                color={colors.generalText[colorMode]}
              >
                {props.title}
              </Text>
              <Text
                fontSize="0.7rem"
                noOfLines={2}
                color={colors.secondaryText[colorMode]}
              >
                {props.description}
              </Text>
            </Box>
            <Spacer px={1}></Spacer>
            {renderAddToMyListIcon()}
          </Flex>
        </Box>
      )}
    </CardWrapper>
  )
}

export { CategoryPostCard }
