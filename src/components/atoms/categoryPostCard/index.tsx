import { useMutation } from '@apollo/client'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Box, Flex, Spacer, Spinner, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

import { Icon } from '@iconify/react'
import {
  MUTATION_PIN_CATEGORY,
  MUTATION_UNPIN_CATEGORY
} from 'services/graphql'

import { useThemeStore } from 'services/stores'
import { breakpoints, colors } from 'styles'
import { CategoryPostCardProps } from 'types/categories'
import { BlockedContent, CardWrapper, PostContent } from './style'

import { stripHTML, stripHTMLExceptLineBreaks } from 'utils/helperFunctions'

const CategoryPostCard = ({
  categoryUnpinned,
  ...props
}: CategoryPostCardProps) => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const [hover, setHover] = useState(false)
  const [isCategoryPinned, setIsCategoryPinned] = useState(false)
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

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
      },
    }
  )

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

  const selectCategory = () => history.push(`${props.url}`)

  const renderAddToMyListIcon = () => (
    <Box
      borderColor="red"
      backgroundColor={colors.cardBg[colorMode]}
      borderRadius="100%"
      minWidth="25px"
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
      <PostContent onClick={selectCategory} {...props}>
        {props.isExclusive && (
          <BlockedContent>
            <Icon
              width={20}
              color={colors.white}
              icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
            />
          </BlockedContent>
        )}
      </PostContent>
      {hover && isDesktop && (
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
                {stripHTML(props.title || '')}
              </Text>
              <Text
                fontSize="0.7rem"
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
            {renderAddToMyListIcon()}
          </Flex>
        </Box>
      )}
    </CardWrapper>
  )
}

export { CategoryPostCard }
