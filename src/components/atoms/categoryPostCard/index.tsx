import { useState } from 'react'
import { useHistory } from 'react-router'
import { Flex, Text, Box, Spacer } from '@chakra-ui/react'
import { useThemeStore } from 'services/stores'
import { CategoryPostCardProps } from 'types/categories'
import { colors } from 'styles'
import { CardWrapper, PostContent } from './style'

const CategoryPostCard = ({ ...props }: CategoryPostCardProps) => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const [hover, setHover] = useState(false)

  // TODO: ALL comments in this page are waiting for API Pin/Unpin Category mutations

  // const [pinCategory, { loading }] = useMutation(
  //   props.isPinned ? MUTATION_UNPIN_CATEGORY : MUTATION_PIN_CATEGORY,
  //   {
  //     variables: {
  //       categoryId: props.id,
  //     },
  //   }
  // )

  const selectCategory = () => history.push(`${props.url}`)

  // const renderAddToMyListIcon = () => (
  //   <Box
  //     borderColor="red"
  //     backgroundColor={colors.cardBg[colorMode]}
  //     borderRadius="100%"
  //     width="25px"
  //     height="25px"
  //     display="flex"
  //     alignItems="center"
  //     justifyContent="center"
  //     // onClick={() => pinCategory()}
  //   >
  //     {loading ? (
  //       <Spinner
  //         thickness="1px"
  //         width="15px"
  //         height="15px"
  //         color={colors.brand.primary[colorMode]}
  //       />
  //     ) : (
  //       <Icon
  //         icon={props.isPinned ? 'mdi:check' : 'mdi:plus'}
  //         color={
  //           props.isPinned
  //             ? colors.brand.primary[colorMode]
  //             : colors.generalText[colorMode]
  //         }
  //       />
  //     )}
  //   </Box>
  // )

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
                fontSize="0.75rem"
                noOfLines={2}
                color={colors.secondaryText[colorMode]}
              >
                {props.description}
              </Text>
            </Box>
            <Spacer px={1}></Spacer>
            {/* {renderAddToMyListIcon()} */}
          </Flex>
        </Box>
      )}
    </CardWrapper>
  )
}

export { CategoryPostCard }
